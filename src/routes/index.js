import express from 'express';

import environmentRouters from './environment-router';
import userRouters from './user-router';

const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'Hello World' });
});

app.use(environmentRouters);
app.use(userRouters);

export default app;
