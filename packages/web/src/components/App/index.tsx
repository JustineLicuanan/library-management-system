import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useState } from 'react';
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';

import { useStyles } from './styles';
import NavBar from '../NavBar';
import NavDrawer from '../NavDrawer';
import Home from '../../pages';
import { routes } from '../../routes';

const App = () => {
	const classes = useStyles();
	const [open, setOpen] = useState(false);
	const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

	const handleDrawerOpen = () => setOpen(true);
	const handleDrawerClose = () => setOpen(false);

	return (
		<div className={classes.root}>
			<CssBaseline />
			<Router>
				<NavBar handleDrawerOpen={handleDrawerOpen} open={open} />
				<NavDrawer open={open} handleDrawerClose={handleDrawerClose} />
				<Switch>
					<Route path={routes.dashboard.path} exact>
						<Home fixedHeightPaper={fixedHeightPaper} />
					</Route>
				</Switch>
			</Router>
		</div>
	);
};

export default App;
