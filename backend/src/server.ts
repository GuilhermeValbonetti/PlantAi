import "dotenv/config"
import express from 'express';
import { connectDB } from './db/connection';
const app = express();


app.get('/', (req, res) => {
  res.send('Hello World!')
})

connectDB();
app.listen(3000, () => {
  console.log(`App está rodando`)
})
