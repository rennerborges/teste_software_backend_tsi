import express from 'express';

import environmentController from './controllers/environment-controller';
import userController from './controllers/user-controller';
import authController from './controllers/auth-controller';

import { Auth } from './middleware/auth-middleware';
import ValidationUserPost from './validation/user-post-validation';
import ValidationEnvironmentPost from './validation/environment-post-validation';

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'Hello World' });
});

router.post('/login', authController.login);

router.get('/environments', Auth('g'), environmentController.getEnvironments);
router.get('/environment/:id', Auth('g'), environmentController.getEnvironment);
router.post(
  '/environment',
  Auth('g'),
  ValidationEnvironmentPost,
  environmentController.createEnvironment
);
router.patch(
  '/environment',
  Auth('g'),
  environmentController.updateEnvironment
);

router.get('/users', Auth('g'), userController.getUsers);
router.get('/user/:id', Auth('g'), userController.getUser);
router.post('/user', Auth('g'), ValidationUserPost, userController.createUser);
router.patch('/user', Auth('g'), userController.updateUser);

export default router;
