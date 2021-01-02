import React from 'react';
import { Link } from 'react-router-dom';

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

				<Link to='/' className={classes.logo}>
					<h3>{process.env.REACT_APP_SITE_NAME}</h3>
				</Link>

				{isAuth ? null : <AuthLinks />}
			</div>
		</nav>
	);
};

export default Navbar;
