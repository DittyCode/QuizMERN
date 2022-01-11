import Navbar from '../../components/Navbar/Navbar';
import styled from './Register.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ChangeEvent, SyntheticEvent, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { faEye } from '@fortawesome/free-solid-svg-icons';

const Register = () => {
	const navigate = useNavigate();
	const [inputType, setInputType] = useState('password');
	const [nameInput, setNameInput] = useState('');
	const [emailInput, setEmailInput] = useState('');
	const [passwordInput, setPasswordInput] = useState('');
	const [passwordConfirmInput, setPasswordConfirmInput] = useState('');

	const handleChangeTypeClick = () => {
		setInputType(inputType === 'password' ? 'text' : 'password');
	};

	const handleSubmit = async (e: SyntheticEvent) => {
		e.preventDefault();
		try {
			const signup = await axios.post(
				'http://localhost:3000/api/v1/users/signup',
				{
					name: nameInput,
					email: emailInput,
					password: passwordInput,
					passwordConfirm: passwordConfirmInput,
				}
			);

			const { data } = signup.data;

			localStorage.setItem('token', data.token);
			navigate('/login', { replace: true });
			console.log(data);
		} catch (err: any) {
			console.log(err.response.data);
		}
	};

	return (
		<>
			<Navbar />
			<section className={styled.container}>
				<form className={styled.form} onSubmit={handleSubmit}>
					<h1 className={styled.form__title}>Get Started!</h1>
					<p className={styled.form__description}>Register in 10 seconds</p>
					<div className={styled.form__item}>
						<label htmlFor='name' className={styled.form__label}>
							Name
						</label>
						<input
							type='text'
							className={styled.form__input}
							id='name'
							value={nameInput}
							onChange={(e: ChangeEvent<HTMLInputElement>) =>
								setNameInput(e.target.value)
							}
						/>
					</div>
					<div className={styled.form__item}>
						<label htmlFor='email' className={styled.form__label}>
							Email
						</label>
						<input
							type='text'
							className={styled.form__input}
							id='email'
							value={emailInput}
							onChange={(e: ChangeEvent<HTMLInputElement>) =>
								setEmailInput(e.target.value)
							}
						/>
					</div>
					<div className={styled.form__item}>
						<label htmlFor='password' className={styled.form__label}>
							Password
						</label>
						<input
							type={inputType}
							className={styled.form__input}
							id='password'
							value={passwordInput}
							onChange={(e: ChangeEvent<HTMLInputElement>) =>
								setPasswordInput(e.target.value)
							}
						/>
						{passwordInput.length > 0 && (
							<FontAwesomeIcon
								icon={faEye}
								className={styled.form__icon}
								onClick={handleChangeTypeClick}
							/>
						)}
					</div>
					<div className={styled.form__item}>
						<label htmlFor='passwordConfirm' className={styled.form__label}>
							Password Confirm
						</label>
						<input
							type={inputType}
							className={styled.form__input}
							id='passwordConfirm'
							value={passwordConfirmInput}
							onChange={(e: ChangeEvent<HTMLInputElement>) =>
								setPasswordConfirmInput(e.target.value)
							}
						/>
					</div>
					<button className={styled.form__btn}>Register</button>
				</form>
			</section>
		</>
	);
};

export default Register;
