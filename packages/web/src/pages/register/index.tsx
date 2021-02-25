import { useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Link as RouterLink } from 'react-router-dom';

import Copyright from '../../components/Copyright';
import { useStyles } from './styles';
import { routes } from '../../routes';
import { constants } from '../../constants';

export default function SignUp() {
	const classes = useStyles();

	useEffect(() => {
		document.title = `Register | ${constants.title}`;
	}, []);

	return (
		<Container component='main' maxWidth='xs'>
			<div className={classes.appBarSpacer} />
			<div className={classes.paper}>
				<Avatar className={classes.avatar}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component='h1' variant='h5'>
					Register
				</Typography>
				<form className={classes.form} noValidate>
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<TextField
								variant='outlined'
								required
								fullWidth
								id='name'
								label='Name'
								name='name'
								autoComplete='name'
								placeholder='e.g.: John Doe'
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant='outlined'
								required
								fullWidth
								id='phone'
								label='Contact No.'
								name='phone'
								autoComplete='phone'
								placeholder='e.g.: 09223456789'
								type='tel'
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant='outlined'
								required
								fullWidth
								id='email'
								label='Email Address'
								name='email'
								autoComplete='email'
								placeholder='e.g.: john.doe@gmail.com'
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant='outlined'
								required
								fullWidth
								name='password'
								label='Password'
								type='password'
								id='password'
								autoComplete='current-password'
							/>
						</Grid>
					</Grid>
					<Button
						type='submit'
						fullWidth
						variant='contained'
						color='primary'
						className={classes.submit}
					>
						Register
					</Button>
					<Grid container justify='flex-end'>
						<Grid item>
							<Link
								to={routes.login.path}
								variant='body2'
								component={RouterLink}
							>
								Already have an account? Login
							</Link>
						</Grid>
					</Grid>
				</form>
			</div>
			<Copyright />
		</Container>
	);
}
