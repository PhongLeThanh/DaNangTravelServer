import {Router} from 'express';
import ProfileController from "../../controllers/api/ProfileController";

const router = Router();

router.route('').get(ProfileController.index);
router.route('').post(ProfileController.create);
router.route('/:id').get(ProfileController.view);
router.route('/:id').put(ProfileController.update);
export default router;