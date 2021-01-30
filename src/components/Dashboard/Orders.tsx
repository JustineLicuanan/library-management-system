import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { MouseEvent } from 'react';

import Title from './Title';

type CreateData = (
	...data: (string | number)[]
) => { [key: string]: string | number };

// Generate Order Data
const createData: CreateData = (
	id,
	date,
	name,
	shipTo,
	paymentMethod,
	amount
) => ({ id, date, name, shipTo, paymentMethod, amount });

const rows = [
	createData(
		0,
		'28 Jan, 2021',
		'Elvis Presley',
		'Tupelo, MS',
		'VISA ⠀•••• 3719',
		312.44
	),
	createData(
		1,
		'28 Jan, 2021',
		'Paul McCartney',
		'London, UK',
		'VISA ⠀•••• 2574',
		866.99
	),
	createData(
		2,
		'28 Jan, 2021',
		'Tom Scholz',
		'Boston, MA',
		'MC ⠀•••• 1253',
		100.81
	),
	createData(
		3,
		'28 Jan, 2021',
		'Michael Jackson',
		'Gary, IN',
		'AMEX ⠀•••• 2000',
		654.39
	),
	createData(
		4,
		'27 Jan, 2021',
		'Bruce Springsteen',
		'Long Branch, NJ',
		'VISA ⠀•••• 5919',
		212.79
	),
];

const preventDefault = (event: MouseEvent) => {
	event.preventDefault();
};

const useStyles = makeStyles((theme) => ({
	seeMore: {
		marginTop: theme.spacing(3),
	},
}));

const Orders = () => {
	const classes = useStyles();

	return (
		<>
			<Title>Recent Orders</Title>
			<Table size='small'>
				<TableHead>
					<TableRow>
						<TableCell>Date</TableCell>
						<TableCell>Name</TableCell>
						<TableCell>Ship To</TableCell>
						<TableCell>Payment Method</TableCell>
						<TableCell align='right'>Sale Amount</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row) => (
						<TableRow key={row.id}>
							<TableCell>{row.date}</TableCell>
							<TableCell>{row.name}</TableCell>
							<TableCell>{row.shipTo}</TableCell>
							<TableCell>{row.paymentMethod}</TableCell>
							<TableCell align='right'>{row.amount}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
			<div className={classes.seeMore}>
				<Link color='primary' href='#' onClick={preventDefault}>
					See more orders
				</Link>
			</div>
		</>
	);
};

export default Orders;
