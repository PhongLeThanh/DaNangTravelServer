import DataRouter from './DataRouter';
import LocationRouter from './LocationRouter'
import DistrictRouter from './DistrictRouter'
import CategoryRouter from './CategoryRouter'
import PlaceRouter from './PlaceRouter'
import RestaurantRouter from './RestaurantRouter'
import HotelRouter from './HotelRouter'
import TouristAttractionRouter from './TouristAttractionRouter'
import UserRouter from './UserRouter'
import ProfileRouter from './ProfileRouter'
import ImageRouter from './ImageRouter'

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
router.use('/profiles',ProfileRouter);
router.use('/images',ImageRouter);

export default router;