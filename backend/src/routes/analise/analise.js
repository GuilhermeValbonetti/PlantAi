
import { Router } from "express";
import { execSQLQuery } from "../../db/connection.js";

const router = Router();

//Contar analises - Yallison
router.post("/analises-usuario", async (req, res) => {
    const body = req.json()

    const id = body.id;
    const nome_planta = body.nome_popular;
    const doenca = body.possivelDoenca;
    const probabilidade = body.nivelConfianca;
    const analise = body.rawText;
    const data = Date.now()

    try
    {
        const result =  await execSQLQuery(`INSERT INTO consulta (nome_planta, analise, doenca, probabilidade, data, id_usuario) VALUES ('${nome_planta}', '${analise}', '${doenca}', '${probabilidade}', ${data}, '${id}')`)
        console.log(result)
        return res.json({sucess: true});
    }
    catch(error)
    {
        console.log(error)
        return Response.json(error)
    }
})

export default router