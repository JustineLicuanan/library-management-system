import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { removeUser } from '../../redux/slices/userSlice';

const Logout = () => {
	const dispatch = useDispatch();
	const history = useHistory();

	useEffect(() => {
		dispatch(removeUser());
		history.push('/login');
	});

	return null;
};

export default Logout;
