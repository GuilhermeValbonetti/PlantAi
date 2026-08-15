
import express from 'express';
import { connectDB, execSQLQuery } from './db/connection';
const app = express();


app.get('/', (req, res) => {
  res.send('Hello World!')
})

//Inicialização do servidor -- Yallison
app.listen(3000, () => {
  console.log(`App está rodando`)
})
