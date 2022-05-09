import express from 'express';

import companyController from '../controllers/company-controller';
import authController from '../controllers/auth-controller';

import { Auth } from '../middleware/auth-middleware';
import ValidationEnvironmentPost from '../validation/company-post-validation';

const router = express.Router();

router.post('/login', authController.login);

router.get('/environments', Auth('g'), companyController.getEnvironments);

router.get('/environment/:id', Auth('g'), companyController.getEnvironment);

router.post(
  '/environment',
  Auth('g'),
  ValidationEnvironmentPost,
  companyController.createEnvironment
);

router.patch('/environment', Auth('g'), companyController.updateEnvironment);

export default router;
