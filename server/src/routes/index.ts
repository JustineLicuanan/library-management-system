import { Express } from 'express';

import { authRoute } from './authRoute';
import { bookItemRoute } from './bookItemRoute';

export const useRoutes = (app: Express) => {
	app.use('/auth', authRoute);
	app.use('/book-items', bookItemRoute);
};
