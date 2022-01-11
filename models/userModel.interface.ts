import { Document } from 'mongoose';

interface IUser extends Document {
	name: string;
	email: string;
	password: string;
	passwordConfirm: string;
}

export default IUser;
