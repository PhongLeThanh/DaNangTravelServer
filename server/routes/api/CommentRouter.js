import {Router} from 'express';
import CommentController from '../../controllers/api/CommentController';
import {IsAuth} from "../../middlewares";

const router = Router();

router.route('/').get(CommentController.index);
router.route('/').post([IsAuth.index], CommentController.insert);
router.route('/viewByPlace/:placeId').get(CommentController.viewByPlaceId);
router.route('/viewByUser/:userId').get(CommentController.viewByUserId);

export default router;