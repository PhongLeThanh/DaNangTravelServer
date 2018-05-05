import {Router} from 'express';
import PlaceController from "../../controllers/api/PlaceController";

const router = Router();

router.route('').get(PlaceController.index);
router.route('').post(PlaceController.create)
router.route('/viewById/:id').get(PlaceController.viewByPlaceId);
router.route('/viewByLocation/:locationId').get(PlaceController.viewByLocation);
router.route('/viewByCategory/:categoryId').get(PlaceController.viewByCategory);
router.route('/viewTop').get(PlaceController.viewTop);
router.route('/viewTopByCategory/:categoryId').get(PlaceController.viewTopByCategoryId);
router.route('/search/').post(PlaceController.searchByName);

export default router;
