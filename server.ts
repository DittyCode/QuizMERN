import express from 'express';
import dotenv from 'dotenv';

dotenv.config({ path: './config/.env' });

const app = express();

const SERVER_PORT = process.env.SERVER_PORT || 3000;

app.listen(SERVER_PORT, () => {
	console.log(`Server is listening at port : ${SERVER_PORT}`);
});
