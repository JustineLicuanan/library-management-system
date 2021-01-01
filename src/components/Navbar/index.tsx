import React from 'react';

import classes from './style.module.scss';
import AuthLinks from '../AuthLinks';

const Navbar = () => {
	const isAuth = false;

	return (
		<nav className={classes.navbar}>
			<div className={`container flex ${classes.flex}`}>
				<div className={classes.burger}>
					<div></div>
					<div></div>
					<div></div>
				</div>

				<a href='/' className={classes.logo}>
					<h3>{process.env.REACT_APP_SITE_NAME}</h3>
				</a>

				{isAuth ? null : <AuthLinks />}
			</div>
		</nav>
	);
};

export default Navbar;
