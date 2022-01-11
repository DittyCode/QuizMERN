import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';
import authRouter from './routes/authRoutes';

dotenv.config({ path: './config/.env' });

const app = express();

app.use(express.json());
app.use(cors());

const PROJECT_MODE = process.env.MODE_ENV;

if (PROJECT_MODE === 'development') {
	app.use(morgan('dev'));
}

const SERVER_PORT = process.env.SERVER_PORT || 3000;

app.use('/api/v1/users', authRouter);

app.listen(SERVER_PORT, () => {
	console.log(
		`Server is listening at port : ${SERVER_PORT} - MODE : ${PROJECT_MODE}`
	);
});
