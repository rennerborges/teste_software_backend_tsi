import express from 'express';

import environmentController from './controllers/environment';
import userController from './controllers/user';
import authController from './controllers/auth';

import { Auth } from './middleware/auth';
import ValidationUserPost from './validation/user-post';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello World');
});

router.post('/login', authController.login);

router.get('/environments', Auth, environmentController.getEnvironments);
router.get('/environment/:id', Auth, environmentController.getEnvironment);
router.post('/environment', Auth, environmentController.createEnvironment);
router.patch('/environment', Auth, environmentController.updateEnvironment);

router.get('/users', Auth, userController.getUser);
router.get('/user/:id', Auth, userController.getUser);
router.post('/user', Auth, ValidationUserPost, userController.createUser);
router.patch('/user', Auth, userController.updateUser);

export default router;
