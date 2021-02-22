import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import { useStyles } from './styles';

interface Props {
	open: boolean;
	handleDrawerClose: () => void;
}

const NavDrawer = ({ open, handleDrawerClose }: Props) => {
	const classes = useStyles();

	return (
		<Drawer
			variant='permanent'
			classes={{
				paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
			}}
			open={open}
		>
			<div className={classes.toolbarIcon}>
				<IconButton onClick={handleDrawerClose}>
					<ChevronLeftIcon />
				</IconButton>
			</div>
			<Divider />
			<List>{/* mainListItems */}</List>
			<Divider />
			<List>{/* secondaryListItems */}</List>
		</Drawer>
	);
};

export default NavDrawer;
