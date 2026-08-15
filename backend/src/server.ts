import "dotenv/config"
import express from 'express';
import { connectDB, execSQLQuery } from './db/connection';
const app = express();


app.get('/', (req, res) => {
  res.send('Hello World!')
})


console.log(execSQLQuery("SELECT * FROM usuario"));
//Inicialização do servidor -- Yallison
app.listen(3000, () => {
  console.log(`App está rodando`)
})
