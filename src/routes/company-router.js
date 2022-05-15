import express from 'express';

import companyController from '../controllers/company-controller';
import authController from '../controllers/auth-controller';

import { Auth } from '../middleware/auth-middleware';
import ValidationEnvironmentPost from '../validation/company-post-validation';
import ValidationCompanyEdit from '../validation/company-edit-validation';
import companyMiddleware from '../middleware/company-middleware';

const router = express.Router();

router.post('/login', authController.login);

router.get('/company', Auth('g'), companyController.getEnvironments);

router.get(
  '/company/:id',
  Auth('g'),
  companyMiddleware.ValidateCompany,
  companyController.getEnvironment
);

router.post(
  '/company',
  Auth('g'),
  companyMiddleware.ValidateCompany,
  ValidationEnvironmentPost,
  companyController.createEnvironment
);

router.patch(
  '/company',
  Auth('g'),
  companyMiddleware.ValidateCompany,
  ValidationCompanyEdit,
  companyController.updateEnvironment
);

router.delete(
  '/company/:id',
  Auth('g'),
  companyMiddleware.ValidateCompany,
  companyController.deleteEnvironment
);

export default router;
