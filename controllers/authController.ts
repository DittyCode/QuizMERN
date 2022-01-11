import { Request, Response, NextFunction } from 'express';
import asyncHandler from 'express-async-handler';

const signup = asyncHandler(
	async (req: Request, res: Response, next: NextFunction) => {
		res.send('HELLO');
	}
);

export { signup };
