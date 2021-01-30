import { Container, Grid, Paper, Box } from '@material-ui/core';
import clsx from 'clsx';

import Deposits from './Deposits';
import useStyles from './globals';
import Orders from './Orders';
import DashCopyright from './DashCopyright';

const Main = () => {
	const classes = useStyles();
	const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

	return (
		<main className={classes.content}>
			<div className={classes.appBarSpacer} />
			<Container maxWidth='lg' className={classes.container}>
				<Grid container spacing={3}>
					{/* Chart */}
					<Grid item xs={12} md={8} lg={9}>
						<Paper className={fixedHeightPaper}>
							<></>
						</Paper>
					</Grid>
					{/* Recent Deposits */}
					<Grid item xs={12} md={4} lg={3}>
						<Paper className={fixedHeightPaper}>
							<Deposits />
						</Paper>
					</Grid>
					{/* Recent Orders */}
					<Grid item xs={12}>
						<Paper className={classes.paper}>
							<Orders />
						</Paper>
					</Grid>
				</Grid>
				<Box pt={4}>
					<DashCopyright />
				</Box>
			</Container>
		</main>
	);
};

export default Main;
