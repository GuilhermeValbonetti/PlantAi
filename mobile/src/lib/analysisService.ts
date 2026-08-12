import Constants from "expo-constants";
import { Platform } from "react-native";

export type ResultadoAnalise = {
  nomePopular: string;
  possivelDoenca: string;
  nivelConfianca: string;
  tratamento: string;
  prevencao: string;
  observacoes: string;
  rawText: string;
};

function descobrirApiUrl() {
  if (process.env.EXPO_PUBLIC_API_URL) {
    return process.env.EXPO_PUBLIC_API_URL;
  }

  const hostUri = Constants.expoConfig?.hostUri;

  if (hostUri) {
    const host = hostUri.split(":")[0];
    return `http://${host}:3001`;
  }

  if (Platform.OS === "android") {
    return "http://10.0.2.2:3001";
  }

  return "http://localhost:3001";
}

const API_URL = descobrirApiUrl();

function descobrirMimeType(uri: string) {
  const uriMinusculo = uri.toLowerCase();

  if (uriMinusculo.endsWith(".png")) {
    return "image/png";
  }

  if (uriMinusculo.endsWith(".webp")) {
    return "image/webp";
  }

  return "image/jpeg";
}

export async function analisarImagemPlanta(imageUri: string): Promise<ResultadoAnalise> {
  const formData = new FormData();

  formData.append("imagem", {
    uri: imageUri,
    name: "planta.jpg",
    type: descobrirMimeType(imageUri),
  } as never);

  const response = await fetch(`${API_URL}/api/analisar-planta`, {
    method: "POST",
    body: formData,
  });

  const dados = await response.json().catch(() => null);

  if (!response.ok) {
    throw new Error(dados?.message || "Nao foi possivel concluir a analise.");
  }

  return {
    nomePopular: dados?.nomePopular || "Nao identificado",
    possivelDoenca: dados?.possivelDoenca || "Nao identificado",
    nivelConfianca: dados?.nivelConfianca || "Nao informado",
    tratamento: dados?.tratamento || "Nao identificado",
    prevencao: dados?.prevencao || "Nao identificado",
    observacoes: dados?.observacoes || "",
    rawText: dados?.rawText || "",
  };
}
