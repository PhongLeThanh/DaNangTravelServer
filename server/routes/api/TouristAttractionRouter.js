import {Router} from 'express';
import TouristAttractionController from "../../controllers/api/TouristAttractionController";

const router = Router();

router.route('').get(TouristAttractionController.index);
router.route('').post(TouristAttractionController.create);

export default router;