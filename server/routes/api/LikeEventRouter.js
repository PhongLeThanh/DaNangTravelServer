import {Router} from 'express';
import LikeEventController from "../../controllers/api/LikeEventController";
import {IsAuth} from "../../middlewares";

const router = Router();

router.route('').get(LikeEventController.index);
router.route('').post([IsAuth.index],LikeEventController.insert);
router.route('').delete([IsAuth.index],LikeEventController.delete);

export default router;
