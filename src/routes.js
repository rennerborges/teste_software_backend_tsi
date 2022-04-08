import express from 'express';

import environmentController from './controllers/environment';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello World');
});

router.get('/environments', environmentController.getEnvironment);

export default router;
