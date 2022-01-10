import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';

dotenv.config({ path: './config/.env' });

const app = express();

const PROJECT_MODE = process.env.MODE_ENV;

if (PROJECT_MODE === 'development') {
	app.use(morgan('dev'));
}

const SERVER_PORT = process.env.SERVER_PORT || 3000;

app.listen(SERVER_PORT, () => {
	console.log(
		`Server is listening at port : ${SERVER_PORT} - MODE : ${PROJECT_MODE}`
	);
});
