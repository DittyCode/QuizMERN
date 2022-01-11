import { Request, Response, NextFunction } from 'express';
import User from '../models/userModel';
import asyncHandler from 'express-async-handler';

const signup = asyncHandler(
	async (req: Request, res: Response, next: NextFunction) => {
		const { name, email, password, passwordConfirm } = req.body;

		const newUser = await User.create({
			name,
			email,
			password,
			passwordConfirm,
		});

		res.status(200).send({
			message: 'success',
			data: {
				newUser,
			},
		});
	}
);

export { signup };
