import {Router} from 'express';
import DistrictController from "../../controllers/api/DistrictController";

const router = Router();

router.route('').get(DistrictController.index);

export default router;