import {Router} from 'express';
import EventController from "../../controllers/api/EventController";

const router = Router();

router.route('').get(EventController.index);
router.route('').post(EventController.insert);
router.route('/viewById/:id').get(EventController.viewById);
router.route('/:id').put(EventController.update);
router.route('/:id').delete(EventController.delete);
router.route('/viewHot').get(EventController.viewHot);

export default router;
