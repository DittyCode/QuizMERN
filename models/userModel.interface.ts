import { Document } from 'mongoose';

interface IUserQuery {
	comparePassword: (password: string, userPassword: string) => boolean;
}

interface IUser extends Document, IUserQuery {
	name: string;
	email: string;
	password: string;
	passwordConfirm: string | undefined;
}

export default IUser;
