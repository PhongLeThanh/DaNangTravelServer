import {Router} from 'express';
import CategoryController from "../../controllers/api/CategoryController";

const router = Router();

router.route('').get(CategoryController.index);

export default router;