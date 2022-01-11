import { Request, Response, NextFunction } from 'express';
import asyncHandler from 'express-async-handler';

const signup = asyncHandler(
	async (req: Request, res: Response, next: NextFunction) => {
		res.status(200).json({
			message: 'Hello',
			token: 'blaba',
			data: [],
		});
	}
);

export { signup };
