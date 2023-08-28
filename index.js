import express from 'express';
import dotenv from 'dotenv';
import Connection from './database/db.js';
import Defaultdata from './default.js';
import Router from './routes/ROUTE.js';
import cors from 'cors';
import bodyParser from 'body-parser';
const app = express();

dotenv.config();
const port = 8000;

app.use(cors());
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use('/' , Router);

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

Connection(USERNAME , PASSWORD);



app.listen(port , ()=>{
console.log( `Server is running on port${port}`);
})

Defaultdata();