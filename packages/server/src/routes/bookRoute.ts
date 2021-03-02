import { Router } from 'express';

import * as controller from '../controllers/bookController';
import { isAuth } from '../middlewares/isAuth';

const router = Router();

router.post('/add', isAuth, controller.POST_addBook);
router.get('/', isAuth, controller.GET_books);
router.get('/:id', isAuth, controller.GET_book);
router.patch('/update/:id', isAuth, controller.PATCH_updateBook);
router.patch('/delete/:id', isAuth, controller.DELETE_deleteBook);

export const bookRoute = router;
