import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useState } from 'react';
import clsx from 'clsx';

import { useStyles } from './styles';
import NavBar from '../NavBar';
import NavDrawer from '../NavDrawer';
import Home from '../../pages';
import Login from '../../pages/login';
import Register from '../../pages/register';
import { routes } from '../../routes';

const App = () => {
	const classes = useStyles();
	const [open, setOpen] = useState(false);
	const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	return (
		<Router>
			<div className={classes.root}>
				<NavBar handleDrawerOpen={handleDrawerOpen} open={open} />
				<NavDrawer open={open} handleDrawerClose={handleDrawerClose} />
				<Switch>
					<Route path={routes.dashboard.path} exact>
						<Home fixedHeightPaper={fixedHeightPaper} />
					</Route>

					<Route path={routes.register.path} exact>
						<Register />
					</Route>

					<Route path={routes.login.path} exact>
						<Login />
					</Route>
				</Switch>
			</div>
		</Router>
	);
};

export default App;
