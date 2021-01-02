import React from 'react';
import { Link } from 'react-router-dom';

import classes from './style.module.scss';

const AccountLinks = () => {
	return (
		<ul className={`${classes.accLinks} ${classes.flex} flex`}>
			<li>
				<Link to='/account' className={`btn ${classes.btn}`}>
					Account
				</Link>
			</li>
			<li>
				<Link to='/logout'>Logout</Link>
			</li>
		</ul>
	);
};

export default AccountLinks;
