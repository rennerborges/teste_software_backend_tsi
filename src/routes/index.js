import express from 'express';

import companyRouters from './company-router';
import userRouters from './user-router';

const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'Hello World' });
});

app.use(companyRouters);
app.use(userRouters);

export default app;
