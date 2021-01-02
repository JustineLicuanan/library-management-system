import React from 'react';
import { Link } from 'react-router-dom';

import classes from './style.module.scss';

const AuthLinks = () => {
	return (
		<ul className={`${classes.authLinks} ${classes.flex} flex`}>
			<li>
				<Link to='/login'>Login</Link>
			</li>
			<li>
				<Link to='/register' className={`btn ${classes.btn}`}>
					Register
				</Link>
			</li>
		</ul>
	);
};

export default AuthLinks;
