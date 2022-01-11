import { Request, Response, NextFunction } from 'express';
import appError from '../utils/appError';
import dotenv from 'dotenv';

dotenv.config({ path: './../config/.env' });

const globalErrorHandler = (
	err: appError,
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const { message, status = 'error', statusCode = 500 } = err;

	res.status(statusCode).send({
		error: {
			message,
			status,
			statusCode,
		},
		stack: process.env.MODE_ENV && err.stack,
	});
};

export default globalErrorHandler;
