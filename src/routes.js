import express from 'express';

import environmentController from './controllers/environment';
import userController from './controllers/user';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello World');
});

router.get('/environments', environmentController.getEnvironments);
router.get('/environment/:id', environmentController.getEnvironment);
router.post('/environment', environmentController.createEnvironment);
router.patch('/environment', environmentController.updateEnvironment);

router.get('/users', userController.getUser);
router.get('/user/:id', userController.getUser);
router.post('/user', userController.createUser);
router.patch('/user', userController.updateUser);

export default router;
