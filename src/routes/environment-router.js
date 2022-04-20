import express from 'express';

import environmentController from '../controllers/environment-controller';
import authController from '../controllers/auth-controller';

import { Auth } from '../middleware/auth-middleware';
import ValidationEnvironmentPost from '../validation/environment-post-validation';

const router = express.Router();

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

export default router;
