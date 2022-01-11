import { Schema, Model, model } from 'mongoose';
import IUser from './userModel.interface';
import bcrypt from 'bcrypt';
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

userSchema.pre<IUser>('save', async function () {
	this.password = await bcrypt.hash(this.password, 10);
	this.passwordConfirm = undefined;
});

userSchema.methods.comparePassword = async function (
	password: string,
	userPassword: string
) {
	return await bcrypt.compare(password, userPassword);
};

const User: Model<IUser> = model<IUser>('User', userSchema);

export default User;
