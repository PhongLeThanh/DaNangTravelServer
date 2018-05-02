import {Router} from 'express';
import LocationController from "../../controllers/api/LocationController";

const router = Router();

router.route('').get(LocationController.index);
router.route('').post(LocationController.create);
router.route('/:id').get(LocationController.viewById);
router.route('/:id').put(LocationController.update);

export default router;
