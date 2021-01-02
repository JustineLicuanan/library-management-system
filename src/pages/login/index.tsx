import React, { useEffect } from 'react';

import classes from './style.module.scss';
import LoginForm from '../../components/LoginForm';

const Login = () => {
	useEffect(() => {
		document.title = `Login | ${process.env.REACT_APP_SITE_NAME}`;
	}, []);

	return (
		<div className={classes.login}>
			<div className='container'>
				<h1 className={classes.heading}>Login to Library</h1>
				<LoginForm />
			</div>
		</div>
	);
};

export default Login;
