import express from 'express';

import companyRouters from './company-router';
import userRouters from './user-router';
import pointRouters from './point-router';

const app = express();

app.get('/', (req, res) => {
  /* #swagger.description = "Rota de teste da API" */
  /* #swagger.security = [] */
  /* #swagger.tags = ["Home"] */
  res.json({ message: 'Hello World' });
});

app.use(companyRouters);
app.use(userRouters);
app.use(pointRouters);

export default app;
