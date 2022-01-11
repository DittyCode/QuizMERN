import { Schema, Model, model } from 'mongoose';
import IUser from './userModel.interface';
import validator from 'validator';

const userSchema = new Schema<IUser>({
	name: {
		type: String,
		required: [true, 'Please provide your name!'],
		minlength: 3,
	},
	email: {
		type: String,
		required: [true, 'Please provide your email!'],
		unique: true,
		lowercase: true,
		trim: true,
		validate: [validator.isEmail, 'Please provide a valid email!'],
	},
	password: {
		type: String,
		required: [true, 'Please provide your password!'],
		minlength: 5,
	},
	passwordConfirm: {
		type: String,
		required: [true, 'Please provide your password!'],
		validate: {
			validator: function (this: IUser, password: string) {
				return password === this.password;
			},
		},
	},
});

const User: Model<IUser> = model<IUser>('User', userSchema);

export default User;
