import express from 'express';

import userController from '../controllers/user-controller';
import ValidationUserPost from '../validation/user-post-validation';
import { Auth } from '../middleware/auth-middleware';

const router = express.Router();

router.get('/users', Auth('g'), userController.getUsers);
router.get('/user/:id', Auth('g'), userController.getUser);
router.post('/user', Auth('g'), ValidationUserPost, userController.createUser);
router.patch('/user', Auth('g'), userController.updateUser);
router.delete('/user/:id', Auth('g'), userController.deleteUser);

export default router;
