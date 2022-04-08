import express from 'express';
import bodyParser from 'body-parser';
import router from './src/routes';

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(router);

app.use(function onError(err, req, res, next) {
  res.status(400).json({ error: err.message });
});
export default app;
