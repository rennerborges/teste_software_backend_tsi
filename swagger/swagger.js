/* eslint-disable import/order */
const dotenv = require('dotenv');
const swaggerOptions = require('./swagger-autogen.options');
const swaggerAutogen = require('swagger-autogen')(swaggerOptions);

dotenv.config({ path: './variables.env' });

const outputFile = './swagger/swagger_output.json';
const endpointsFiles = ['./server.js'];

const doc = {
  openapi: '3.0.0',
  info: {
    version: '1.0.0',
    title: 'API SpeedPoint',
    description: 'Ambiente com as rotas do SpeedPoint',
  },
  host: `localhost:${process.env.PORT}`,
  basePath: '/',
  schemes: [],
  consumes: ['application/json'],
  produces: ['application/json'],
  tags: [
    {
      name: 'Autenticação',
      description: 'Responsável por autenticar os usuários',
    },
    {
      name: 'Empresas',
      description:
        'Responsável pelas empresas onde o usuário estára vinculado para registar um ponto', // Tag description
    },
    {
      name: 'Usuários',
      description:
        'Responsável pelos usuários vinculados a uma empresa que usarão a aplicação', // Tag description
    },
    {
      name: 'Pontos',
      description: 'Registros do honorários dos usuários',
    },
  ],
  securityDefinitions: {
    bearerAuth: {
      type: 'apiKey',
      name: 'token',
      in: 'header',
    },
  },
  security: [
    {
      bearerAuth: [],
    },
  ],
  definitions: {},
  components: {
    schemas: {
      Login: {
        email: '@gmail.com',
        password: 'string',
      },
    },
  },
};

swaggerAutogen(outputFile, endpointsFiles, doc);
