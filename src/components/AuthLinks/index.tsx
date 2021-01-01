import React from 'react';

import classes from './style.module.scss';

const AuthLinks = () => {
	return (
		<ul className={`${classes.authLinks} ${classes.flex} flex`}>
			<li>
				<a href='/login'>Login</a>
			</li>
			<li>
				<a href='/register' className={`btn ${classes.btn}`}>
					Register
				</a>
			</li>
		</ul>
	);
};

export default AuthLinks;
