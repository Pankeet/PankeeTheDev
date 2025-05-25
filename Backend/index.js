import express from "express"; 
const app = express();
import dotenv from 'dotenv';
import cors from 'cors';
import connectdb from './config/db.js';
import router from './routes/recruit.js';
dotenv.config() ;

app.use(express.json()) ;
app.use(cors()) ;

app.use('/api' , router);
connectdb();
app.listen(3000 , () => {
    console.log("Server is Live");
});