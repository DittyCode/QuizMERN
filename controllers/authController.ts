import { Request, Response, NextFunction } from 'express';
import User from '../models/userModel';
import asyncHandler from 'express-async-handler';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import appError from '../utils/appError';

dotenv.config({ path: './../config/.env' });

const signToken = (id: string) => {
	return jwt.sign({ id }, process.env.JWT_SECRET as string, {
		expiresIn: process.env.JWT_EXPIRES,
	});
};

const signup = asyncHandler(
	async (req: Request, res: Response, next: NextFunction) => {
		const { name, email, password, passwordConfirm } = req.body;

		const newUser = await User.create({
			name,
			email,
			password,
			passwordConfirm,
		});

		const token = signToken(newUser._id);

		res.status(200).send({
			message: 'success',
			data: {
				token,
				newUser,
			},
		});
	}
);

const login = asyncHandler(
	async (req: Request, res: Response, next: NextFunction) => {
		const { name, email, password } = req.body;
		if (!name || !email || !password) {
			return next(new appError('Name, email or password data missing', 400));
		}

		const user = await User.findOne({ email });

		if (!user) {
			return next(new appError('User not exist in database', 400));
		}

		const validPasswords = user.comparePassword(password, user.password);

		if (!validPasswords) {
			return next(new appError('Not exist user with this password', 400));
		}

		const token = signToken(user._id);

		res.status(200).send({
			message: 'success',
			data: {
				token,
			},
		});
	}
);

export { signup, login };
