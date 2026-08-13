import { Client } from 'pg';



const client = new Client({
    connectionString: `postgresql://${process.env.DB_USER}:${process.env.DB_PASS}@localhost:${process.env.DB_PORT}/${process.env.DB_SERVER}`
})

async function connectDB()
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

connectDB();

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