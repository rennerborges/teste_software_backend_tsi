import express from 'express';
import productController from './controller/productController';
import userController from './controller/userController';

const router = express.Router();

router.get('/states', userController.getStates);
router.get('/users', userController.getUsers);
router.get('/products', productController.getProduct);

export default router;
