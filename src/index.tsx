// =========================================================
// * Volt React Dashboard
// =========================================================

// * Product Page: https://themesberg.com/product/dashboard/volt-react
// * Copyright 2021 Themesberg (https://www.themesberg.com)
// * Official Repository: https://github.com/themesberg/volt-react-dashboard
// * License: MIT License (https://themesberg.com/licensing)

// * Designed and coded by https://themesberg.com

// =========================================================

// * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. Please contact us to request a removal.

import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

// core styles
import './scss/volt.scss';

// vendor styles
import '@fortawesome/fontawesome-free/css/all.css';
import 'react-datetime/css/react-datetime.css';

import HomePage from './pages/HomePage';
import ScrollToTop from './components/ScrollToTop';

const queryClient = new QueryClient();

ReactDOM.render(
	<QueryClientProvider client={queryClient}>
		<HashRouter>
			<ScrollToTop />
			<HomePage />
		</HashRouter>
		<ReactQueryDevtools initialIsOpen={false} />
	</QueryClientProvider>,
	document.getElementById('root')
);
