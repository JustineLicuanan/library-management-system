import { Typography, Link } from '@material-ui/core';

const DashCopyright = () => {
	return (
		<Typography variant='body2' color='textSecondary' align='center'>
			{'Copyright © '}
			<Link color='inherit' href='https://github.com/JustineLicuanan'>
				Justine Licuanan
			</Link>{' '}
			{new Date().getFullYear()}
		</Typography>
	);
};

export default DashCopyright;
