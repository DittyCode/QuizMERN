class appError extends Error {
	status: string;
	constructor(public message: string, public statusCode: number) {
		super(message);
		this.status = `${this.statusCode}`.startsWith('4') ? 'fail' : 'error';
		Error.captureStackTrace(this, this.constructor);
	}
}

export default appError;
