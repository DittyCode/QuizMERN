import { NextFunction, Request, Response } from 'express';
import appError from './../utils/appError';

const notFound = (req: Request, res: Response, next: NextFunction) => {
	next(new appError(`Server don't handle ${req.originalUrl} url`, 404));
};

export default notFound;
