import Navbar from '../../components/Navbar/Navbar';
import styled from './Login.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ChangeEvent, SyntheticEvent, useState } from 'react';
import { faEye } from '@fortawesome/free-solid-svg-icons';

const Login = () => {
	const [inputType, setInputType] = useState('password');
	const [nameInput, setNameInput] = useState('');
	const [emailInput, setEmailInput] = useState('');
	const [passwordInput, setPasswordInput] = useState('');

	const handleChangeTypeClick = () => {
		setInputType(inputType === 'password' ? 'text' : 'password');
	};

	const handleSubmit = (e: SyntheticEvent) => {
		e.preventDefault();
		console.log(nameInput, emailInput, passwordInput);
	};

	return (
		<>
			<Navbar />
			<section className={styled.container}>
				<form className={styled.form} onSubmit={handleSubmit}>
					<h1 className={styled.form__title}>Get Started!</h1>
					<p className={styled.form__description}>Login in 10 seconds</p>
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
					<button className={styled.form__btn}>Log In</button>
				</form>
			</section>
		</>
	);
};

export default Login;
