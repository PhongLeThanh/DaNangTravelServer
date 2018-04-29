import DataRouter from './DataRouter';
import StudentRouter from './StudentRouter';
import LocationRouter from './LocationRouter'
import DistrictRouter from './DistrictRouter'
import PlaceRouter from './PlaceRouter'

import {Router} from 'express';

const router = Router();

router.use('/data', DataRouter);
router.use('/students', StudentRouter);
router.use('/locations', LocationRouter);
router.use('/districts', DistrictRouter);
router.use('/places', PlaceRouter);
export default router;