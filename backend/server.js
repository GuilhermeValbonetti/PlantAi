import express from "express";
import cors from "cors";
import multer from "multer";
import fs from "fs";
import path from "path";
import { GoogleGenAI } from "@google/genai";

const app = express();
const port = Number(process.env.PORT || 3001);

const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 12 * 1024 * 1024,
  },
});

function resolverCaminhoDaCredencial(valor) {
  if (!valor) {
    return valor;
  }

  if (path.isAbsolute(valor)) {
    return valor;
  }

  const caminhoAtual = path.resolve(process.cwd(), valor);
  if (fs.existsSync(caminhoAtual)) {
    return caminhoAtual;
  }

  const caminhoPai = path.resolve(process.cwd(), "..", valor);
  if (fs.existsSync(caminhoPai)) {
    return caminhoPai;
  }

  return caminhoAtual;
}

process.env.GOOGLE_APPLICATION_CREDENTIALS = resolverCaminhoDaCredencial(
  process.env.GOOGLE_APPLICATION_CREDENTIALS || "credenciais.json",
);

const ai = new GoogleGenAI({
  vertexai: true,
  project: process.env.GOOGLE_CLOUD_PROJECT || "gen-lang-client-0602667900",
  location: process.env.GOOGLE_CLOUD_LOCATION || "us-central1",
});

app.use(cors());
app.use(express.json({ limit: "2mb" }));

app.get("/health", (_, res) => {
  res.json({ ok: true });
});

app.post("/api/analisar-planta", upload.single("imagem"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        message: "Envie uma imagem no campo 'imagem'.",
      });
    }

    const prompt = [
      "Analise esta planta. Informe o nome popular a planta, a possivel doenca, nivel de confianca, tratamento e prevencao.",
      "Responda apenas com JSON valido.",
      "Use exatamente as chaves: nomePopular, possivelDoenca, nivelConfianca, tratamento, prevencao e observacoes.",
      "nomePopular deve ser o nome mais provavel da planta, mesmo se houver incerteza.",
      "Se nao for possivel afirmar com seguranca, use o nome mais proximo possivel em vez de Nao identificado.",
      "nivelConfianca deve ser uma palavra curta como baixa, media ou alta.",
      "tratamento deve ser um texto curto e pratico.",
      "prevencao deve ser um texto curto e pratico.",
      "Use 'Nao identificado' apenas se a imagem estiver muito ruim ou nao houver informacao suficiente.",
    ].join(" ");

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: [
        {
          role: "user",
          parts: [
            { text: prompt },
            {
              inlineData: {
                mimeType: req.file.mimetype || "image/jpeg",
                data: req.file.buffer.toString("base64"),
              },
            },
          ],
        },
      ],
    });

    const textoBruto = (response.text || "").trim();
    const textoLimpo = textoBruto.replace(/```json|```/g, "").trim();

    let dados;
    try {
      dados = JSON.parse(textoLimpo);
    } catch {
      dados = {
        nomePopular: "Nao identificado",
        possivelDoenca: "Nao identificado",
        nivelConfianca: "media",
        tratamento: "Nao identificado",
        prevencao: "Nao identificado",
        observacoes: textoBruto || "A IA nao retornou um JSON valido.",
      };
    }

    return res.json({
      success: true,
      ...dados,
      rawText: textoBruto,
    });
  } catch (error) {
    console.error("Erro ao analisar imagem:", error);
    return res.status(500).json({
      success: false,
      message: "Nao foi possivel analisar a imagem.",
    });
  }
});

app.listen(port, () => {
  console.log(`Backend rodando em http://localhost:${port}`);
});
