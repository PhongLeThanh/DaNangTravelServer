
import {Router} from 'express';
import {DataController} from '../../controllers/api';

const router = Router();


router.route('').get(DataController.index);

export default router;