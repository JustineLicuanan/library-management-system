import { Router } from 'express';

import * as controller from '../controllers/bookItemController';

const router = Router();

router.post('/', controller.POST_add);
router.get('/', controller.GET_slash);
router.patch('/:id', controller.PATCH_update);
router.delete('/:id', controller.DELETE_delete);

export const bookItemRoute = router;
