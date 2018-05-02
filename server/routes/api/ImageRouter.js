
import {Router} from 'express';
import {ImageController} from '../../controllers/api';

const router = Router();


router.route('/upload').post(ImageController.saveImage);
router.route('/:name').get(ImageController.retrieveImage);

export default router;