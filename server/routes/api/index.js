import DataRouter from './DataRouter';
import LocationRouter from './LocationRouter'
import DistrictRouter from './DistrictRouter'
import CategoryRouter from './CategoryRouter'
import PlaceRouter from './PlaceRouter'
import RestaurantRouter from './RestaurantRouter'
import HotelRouter from './HotelRouter'
import TouristAttractionRouter from './TouristAttractionRouter'
import UserRouter from './UserRouter'

import {Router} from 'express';

const router = Router();

router.use('/data', DataRouter);
router.use('/locations', LocationRouter);
router.use('/districts', DistrictRouter);
router.use('/categories', CategoryRouter);
router.use('/places', PlaceRouter);
router.use('/restaurants', RestaurantRouter);
router.use('/hotels', HotelRouter);
router.use('/touristattractions', TouristAttractionRouter);
router.use('/users', UserRouter);

export default router;