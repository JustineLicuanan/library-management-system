import React, { useEffect } from 'react';

const Home = () => {
	useEffect(() => {
		document.title = `Dashboard | ${process.env.REACT_APP_SITE_NAME}`;
	}, []);

	return (
		<div className='container flex'>
			<h1>Dashboard</h1>
		</div>
	);
};

export default Home;
