
import { Router } from "express";
import { execSQLQuery } from "../../db/connection.js";

const router = Router();

//Pegar info usuário - Yallison
router.get("/", async (req, res) => {
    try
    {
        const result =  await execSQLQuery("SELECT id, nome FROM usuario")
        console.log(result.rows[0])
        return res.json(result.rows[0]);
    }
    catch(error)
    {
        console.log(error)
        return Response.json(error)
    }
})

export default router