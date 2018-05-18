import {Router} from 'express';
import LikePlaceController from "../../controllers/api/LikePlaceController";
import {IsAuth} from "../../middlewares";

const router = Router();

router.route('').get(LikePlaceController.index);
router.route('/view/:userId/:placeId').get(LikePlaceController.view);
router.route('').post([IsAuth.index],LikePlaceController.insert);
router.route('').delete([IsAuth.index],LikePlaceController.delete);

export default router;