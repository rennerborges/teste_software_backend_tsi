const mongoose = require('mongoose');
const express = require('express');

import cors from 'cors';
import dotenv from 'dotenv';

import app from './app';
import sendEmail from './services/email/email-controller';

dotenv.config({ path: './variables.env' });

mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.Promise = global.Promise;
mongoose.connection.on('error', (error) => {
  console.error('ERRO: ' + error.message);
});

const server = express();
server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use('/', app);

// sendEmail();

server.listen(process.env.PORT, () => {
  console.log(`Servidor rodando na porta: ${process.env.PORT}`);
});
