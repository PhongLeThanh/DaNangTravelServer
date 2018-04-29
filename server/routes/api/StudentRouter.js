
import {Router} from 'express';
import StudentController from "../../controllers/api/StudentController";

const router = Router();


router.route('').get(StudentController.index);
router.route('').post(StudentController.insert);

export default router;