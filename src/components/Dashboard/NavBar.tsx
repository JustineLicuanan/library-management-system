import {
	AppBar,
	Badge,
	IconButton,
	Toolbar,
	Typography,
} from '@material-ui/core';
import {
	Menu as MenuIcon,
	Notifications as NotificationsIcon,
} from '@material-ui/icons';
import clsx from 'clsx';

import useStyles from './globals';

interface Props {
	open: boolean;
	handleDrawerOpen: () => void;
}

const NavBar = ({ open, handleDrawerOpen }: Props) => {
	const classes = useStyles();

	return (
		<AppBar
			position='absolute'
			className={clsx(classes.appBar, open && classes.appBarShift)}
		>
			<Toolbar className={classes.toolbar}>
				<IconButton
					edge='start'
					color='inherit'
					aria-label='open drawer'
					onClick={handleDrawerOpen}
					className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
				>
					<MenuIcon />
				</IconButton>
				<Typography
					component='h1'
					variant='h6'
					color='inherit'
					noWrap
					className={classes.title}
				>
					Library MS
				</Typography>
				<IconButton color='inherit'>
					<Badge badgeContent={4} color='secondary'>
						<NotificationsIcon />
					</Badge>
				</IconButton>
			</Toolbar>
		</AppBar>
	);
};

export default NavBar;
