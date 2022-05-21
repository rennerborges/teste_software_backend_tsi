/* eslint-disable import/order */
const dotenv = require('dotenv');
const moment = require('moment');
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
        email: 'renner@gmail.com',
        password: '12345678@Re',
      },
      CreateCompany: {
        fantasyName: 'Microsoft',
        corporateName: 'Microsoft',
        cnpj: '68035847000145',
        areaOfOperation: 'Software',
      },
      EditCompany: {
        id: '62804e353f356e900d5eadd9',
        fantasyName: 'Microsoft',
        corporateName: 'Microsoft',
        areaOfOperation: 'Software',
      },
      CreateUser: {
        name: 'Renner Borges',
        password: '12345678@Re',
        email: 'rennerferreira23@gmail.com',
        cpf: '07517373480',
        tel: '6499295-4946',
        dateOfBirth: moment().toISOString(),
        companyId: '628105ab5146f608d0567d6b',
        role: 'g',
        workload: 160,
      },
      EditUser: {
        id: '6281096a860c72ada8bb6715',
        name: 'Renner Borges',
        tel: '6499295-4946',
        password: '12345678@Re',
        workload: 160,
      },
    },
  },
};

swaggerAutogen(outputFile, endpointsFiles, doc);
