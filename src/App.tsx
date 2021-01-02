import React from 'react';
import { useSelector } from 'react-redux';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';

import { selectUser } from './redux/slices/userSlice';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/index';
import Login from './pages/login';
import Logout from './pages/logout';

const App = () => {
	const user = useSelector(selectUser);

	return (
		<Router>
			<Navbar />

			<Switch>
				<Route path='/' exact>
					{user.email ? <Home /> : <Redirect to='/login' />}
				</Route>

				<Route path='/login' exact>
					{!user.email ? <Login /> : <Redirect to='/' />}
				</Route>

				<Route path='/logout' exact>
					<Logout />
				</Route>
			</Switch>

			<Footer />
		</Router>
	);
};

export default App;
