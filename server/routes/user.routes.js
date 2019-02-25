import { Router } from 'express';
import * as UserController from '../controllers/user.controller';
const router = new Router();

// Get all Posts
router.route('/register').post(UserController.register);

export default router;
