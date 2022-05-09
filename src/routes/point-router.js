import express from 'express';

import pointController from '../controllers/point-controller';
import authController from '../controllers/auth-controller';

import { Auth } from '../middleware/auth-middleware';
import ValidationEnvironmentPost from '../validation/company-post-validation';

const router = express.Router();

router.get('/points', Auth('gc'), pointController.getPoints);

router.get('/point/:id', Auth('gc'), pointController.getPoint);

router.post(
  '/point',
  Auth('gc'),
  ValidationEnvironmentPost,
  pointController.createPoint
);

router.patch('/point', Auth('gc'), pointController.updatePoint);

export default router;
