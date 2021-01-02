import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/index';
import Login from './pages/login';

const App = () => {
	const isAuth = false;

	return (
		<Router>
			<Navbar />

			<Switch>
				<Route path='/' exact>
					{isAuth ? <Home /> : <Redirect to='/login' />}
				</Route>

				<Route path='/login' exact>
					{!isAuth ? <Login /> : <Redirect to='/' />}
				</Route>
			</Switch>

			<Footer />
		</Router>
	);
};

export default App;
