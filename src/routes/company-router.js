import express from 'express';

import companyController from '../controllers/company-controller';
import authController from '../controllers/auth-controller';

import { Auth } from '../middleware/auth-middleware';
import ValidationEnvironmentPost from '../validation/company-post-validation';
import ValidationCompanyEdit from '../validation/company-edit-validation';
import companyMiddleware from '../middleware/company-middleware';
import ValidatorLogin from '../validation/login-validation';

const router = express.Router();

router.post('/login', ValidatorLogin, authController.login);

router.get('/companies', Auth(), companyController.getEnvironments);

router.get(
  '/company/:id',
  Auth('gc'),
  companyMiddleware.ValidateCompany,
  companyController.getEnvironment,
);

router.post(
  '/company',
  Auth(),
  ValidationEnvironmentPost,
  companyController.createEnvironment,
);

router.patch(
  '/company',
  Auth('g'),
  companyMiddleware.ValidateCompany,
  ValidationCompanyEdit,
  companyController.updateEnvironment,
);

router.delete(
  '/company/:id',
  Auth(),
  companyMiddleware.ValidateCompany,
  companyController.deleteEnvironment,
);

export default router;
