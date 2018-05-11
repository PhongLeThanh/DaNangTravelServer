import {Router} from 'express';
import PlaceController from "../../controllers/api/PlaceController";

const router = Router();

router.route('').get(PlaceController.index);
router.route('').post(PlaceController.create)
router.route('/viewById/:id').get(PlaceController.viewByPlaceId);
router.route('/viewByLocation/:locationId').get(PlaceController.viewByLocation);
router.route('/viewByCategory/:categoryId').get(PlaceController.viewByCategory);
router.route('/viewByCategoryAndLocation/:categoryId/:locationId').get(PlaceController.viewByCategoryAndLocation);
router.route('/search/').post(PlaceController.searchByName);
router.route('/viewTop').get(PlaceController.viewTop);
router.route('/viewTopInLocation/:locationId').get(PlaceController.viewTopByLocationId);
router.route('/viewTopByCategory/:categoryId').get(PlaceController.viewTopByCategoryId);
router.route('/search').get(PlaceController.searchByName);
router.route('/searchInCategory').get(PlaceController.searchByNameAndCategory);
router.route('/searchAround').get(PlaceController.searchAround);

export default router;
