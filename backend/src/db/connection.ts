import { Client } from 'pg';




const client = new Client({
user: process.env.DB_USER,
password:  process.env.DB_PASS,
host: "localhost",
port: Number(process.env.DB_PORT),
database: process.env.DB_SERVER
})

export async function connectDB()
{
    try{
        await client.connect();
        console.log("Conexão feita com sucessso")
        return client;
    }
    catch(error)
    {
        console.log("Erro na conexão: ", error)
    }
}

export async function execSQLQuery(SQLQuery: string)
{
    const connection = await connectDB();

    try
    {
        const res = await connection?.query(SQLQuery)
        return res;
    }
    catch(error)
    {
        return error;
    }

}