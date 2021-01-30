import Typography from '@material-ui/core/Typography';
import { ReactNode } from 'react';

interface Props {
	children: ReactNode;
}

const Title = ({ children }: Props) => {
	return (
		<Typography component='h2' variant='h6' color='primary' gutterBottom>
			{children}
		</Typography>
	);
};

export default Title;
