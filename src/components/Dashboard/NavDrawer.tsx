import { Divider, Drawer, IconButton, List } from '@material-ui/core';
import { ChevronLeft as ChevronLeftIcon } from '@material-ui/icons';
import clsx from 'clsx';

import useStyles from './globals';
import { mainListItems, secondaryListItems } from './ListItems';

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
			<List>{mainListItems}</List>
			<Divider />
			<List>{secondaryListItems}</List>
		</Drawer>
	);
};

export default NavDrawer;
