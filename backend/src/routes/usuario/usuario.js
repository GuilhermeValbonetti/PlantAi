
import { Router } from "express";
import { execSQLQuery } from "../../db/connection.js";

const router = Router();

router.get("/", async (req, res) => {
    try
    {
        const result =  await execSQLQuery("SELECT nome FROM usuario")
        console.log(result.rows[0].nome)
        return res.json(result.rows[0].nome);
    }
    catch(error)
    {
        console.log(error)
        return Response.json(error)
    }
})

export default router