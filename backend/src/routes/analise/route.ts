import { execSQLQuery } from "../../db/connection";

export default async function GET()
{
    try
    {

        const result =  await execSQLQuery("SELECT nome FROM usuario")
        return Response.json(result);
    }
    catch(error)
    {
        console.log(error)
        return Response.json(error)
    }
}