import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

import { constants } from '../constants';

const Copyright = () => {
	return (
		<Typography variant='body2' color='textSecondary' align='center'>
			{'Made w/ ❤️ by '}
			<Link
				color='inherit'
				href={constants.authorWebsite}
				target='_blank'
				rel='noopener'
			>
				{constants.authorName}
			</Link>
			{' © '}
			{new Date().getFullYear()}
		</Typography>
	);
};

export default Copyright;
