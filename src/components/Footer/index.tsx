import React from 'react';

import classes from './style.module.scss';

const Footer = () => {
	return (
		<footer className={classes.footer}>
			<div className='container flex'>
				<p>
					Made w/ ❤️ by{' '}
					<a
						href='//github.com/JustineLicuanan'
						target='_blank'
						rel='noopener noreferrer'
					>
						Justine Licuanan
					</a>{' '}
					© {new Date().getFullYear()}
				</p>
			</div>
		</footer>
	);
};

export default Footer;
