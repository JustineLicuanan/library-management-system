import { useState } from 'react';

import useStyles from './globals';
import Main from './Main';
import NavBar from './NavBar';
import NavDrawer from './NavDrawer';

const Dashboard = () => {
	const classes = useStyles();
	const [open, setOpen] = useState(true);

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	return (
		<div className={classes.root}>
			<NavBar open={open} handleDrawerOpen={handleDrawerOpen} />
			<NavDrawer open={open} handleDrawerClose={handleDrawerClose} />
			<Main />
		</div>
	);
};

export default Dashboard;
