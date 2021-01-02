import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { selectUser } from '../../redux/slices/userSlice';
import classes from './style.module.scss';
import AuthLinks from '../AuthLinks';
import AccountLinks from '../AccountLinks';

const Navbar = () => {
	const user = useSelector(selectUser);

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

				{user.email ? <AccountLinks /> : <AuthLinks />}
			</div>
		</nav>
	);
};

export default Navbar;
