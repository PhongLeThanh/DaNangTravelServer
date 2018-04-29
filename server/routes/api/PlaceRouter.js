import {Router} from 'express';
import PlaceController from "../../controllers/api/PlaceController";

const router = Router();

router.route('').get(PlaceController.index);
router.route('/:locationId').get(PlaceController.viewByLocation);
router.route('/category/:categoryId').get(PlaceController.viewByCategory);

export default router;