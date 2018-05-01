import {Router} from 'express';
import RestaurantController from "../../controllers/api/RestaurantController";

const router = Router();

router.route('').get(RestaurantController.index);
router.route('').post(RestaurantController.create);

export default router;