import { Router } from 'express';
import { signup, login, protect } from '../controllers/authController';

const router = Router();

router.route('/').get(protect, (req, res) => {
	res.send({ message: 'HELLO!' });
});

router.route('/signup').post(signup);
router.route('/login').post(login);

export default router;
