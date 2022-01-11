import { Router } from 'express';
import { signup } from '../controllers/authController';

const router = Router();

router.route('/signup').get(signup);

export default router;
