import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { MouseEvent } from 'react';

import Title from './Title';

function preventDefault(event: MouseEvent) {
	event.preventDefault();
}

const useStyles = makeStyles({
	depositContext: {
		flex: 1,
	},
});

const Deposits = () => {
	const classes = useStyles();

	return (
		<>
			<Title>Recent Deposits</Title>
			<Typography component='p' variant='h4'>
				$3,024.00
			</Typography>
			<Typography color='textSecondary' className={classes.depositContext}>
				on 28 January, 2021
			</Typography>
			<div>
				<Link color='primary' href='#' onClick={preventDefault}>
					View balance
				</Link>
			</div>
		</>
	);
};

export default Deposits;
