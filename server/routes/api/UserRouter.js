import {Router} from 'express';
import UserController from "../../controllers/api/UserController";
import AuthController from "../../controllers/api/AuthController"
const router = Router();

router.route('').get(UserController.index);
router.route('').post(UserController.create);
router.route('/:id').get(UserController.view);
router.route('/:id').put(UserController.update);
router.route('/login').post(AuthController.login);
router.route('/searchByName').post(UserController.searchByName);
export default router;