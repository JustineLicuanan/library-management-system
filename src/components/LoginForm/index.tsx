import React, { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';

import classes from './style.module.scss';

const LoginForm = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	};

	return (
		<form
			className={`${classes.loginForm} ${classes.flex} flex`}
			onSubmit={handleSubmit}
		>
			<div className='formControl'>
				<input
					type='text'
					placeholder='e.g.: john@example.com'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
			</div>
			<div className='formControl'>
				<input
					type='password'
					placeholder='Password'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
			</div>
			<Link to='/forgot-password'>Forgot your password?</Link>
			<div className='formControl'>
				<button className={`btn ${classes.btn}`} type='submit'>
					Login
				</button>
			</div>
		</form>
	);
};

export default LoginForm;
