import {Router} from 'express';
import HotelController from "../../controllers/api/HotelController";

const router = Router();

router.route('').get(HotelController.index);
router.route('').post(HotelController.create);

export default router;