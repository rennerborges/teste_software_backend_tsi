import express from 'express';

import companyController from '../controllers/company-controller';
import authController from '../controllers/auth-controller';

import { Auth } from '../middleware/auth-middleware';
import ValidationEnvironmentPost from '../validation/company-post-validation';

const router = express.Router();

router.post('/login', authController.login);

router.get('/company', Auth('g'), companyController.getEnvironments);

router.get('/company/:id', Auth('g'), companyController.getEnvironment);

router.post(
  '/company',
  Auth('g'),
  ValidationEnvironmentPost,
  companyController.createEnvironment
);

router.patch('/company', Auth('g'), companyController.updateEnvironment);
router.delete('/company/:id', Auth('g'), companyController.deleteEnvironment);

export default router;
