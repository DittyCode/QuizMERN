import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config({ path: './../config/.env' });

const connectDB = async () => {
	try {
		const DB = process.env.DB_URL?.replace(
			'<PASSWORD>',
			process.env.DB_PASSWORD as string
		);

		await mongoose.connect(DB as string);
		console.log('Succesfully connected with database');
	} catch (err) {
		return err;
	}
};

export default connectDB;
