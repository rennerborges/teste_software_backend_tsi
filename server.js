const moongose = require('mongoose');
const express = require('express');

import cors from 'cors';
import dotenv from 'dotenv';

import app from './app';

dotenv.config({ path: './variables.env' });

moongose.connect( process.env.DATABASE, { useNewUrlParser: true, useUnifiedTopology:true})
moongose.Promise = global.Promise;
moongose.connection.on('error',(error)=>{
    console.error("ERRO: "+error.message); 
});

const server = express();
server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use('/',app);

server.listen(process.env.PORT, ()=>{
    console.log(`Servidor rodando na porta: ${process.env.PORT}`);
})
