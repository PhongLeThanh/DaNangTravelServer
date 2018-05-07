import HttpStatus from 'http-status';
import Response from '../../helpers/Response'
import PlaceRepository from '../../repositories/PlaceRepository'
import CategoryRepository from '../../repositories/CategoryRepository'
import CommentRepository from '../../repositories/CommentRepository'
import {category, comment, hotel, image, location, restaurant, touristattraction, user} from '../../models/index';

const DB = require('../../config/db-config.json');
const connection = DB['development'];
const Sequelize = require('sequelize');
let sequelize = new Sequelize(connection.database, connection.username, connection.password, connection);

const placeRepository = new PlaceRepository();
const categoryRepository = new CategoryRepository();
const commentRepository = new CommentRepository();

class PlaceController {
    index = async (req, res) => {
        try {
            let places = await placeRepository.find({
                attributes: ['id', 'categoryId', 'locationId', 'placeName', 'description', 'detail', 'address', 'phone', 'waypoint', 'rating', [sequelize.fn('count', sequelize.col('comments.placeId')), 'numComment']],
                //attributes: ['place.*', [sequelize.fn('count', sequelize.col('comments.placeId')), 'numCount']],
                include: [{
                    model: comment,
                    attributes: []
                }, {
                    model: restaurant
                }, {
                    model: touristattraction
                }, {
                    model: hotel
                }, {
                    model: image,
                    attributes: ['imageName']
                }],
                group: ['place.id', 'comments.id', 'comments.placeId', 'restaurant.id', 'hotel.id', 'touristattraction.id', 'images.id'],
            });
            return Response.success(res, places);
        }
        catch (e) {
            return Response.error(res, e, HttpStatus.BAD_REQUEST);
        }
    };
    create = async (req, res) => {
        try {
            //viet ham insert o day
            let data = req.body;
            let returnData = await placeRepository.create(data);
            return Response.success(res, returnData);
        }
        catch (e) {
            return Response.error(res, e, HttpStatus.BAD_REQUEST);
        }
    }
    update = async (req, res) => {
        try {
            let placeId = req.param('id');
            let data = req.body;
            let returnData = await placeRepository.update(returnData, {
                where: {
                    id: placeId
                }
            });
            return Response.success(res, returnData);
        } catch (e) {
            Response.error(res, e, HttpStatus.BAD_REQUEST)
        }
    }
    viewByPlaceId = async (req, res) => {
        try {
            let placeIdReq = req.param('id');
            let places = await placeRepository.find({
                attributes: ['id', 'categoryId', 'locationId', 'placeName', 'description', 'detail', 'address', 'phone', 'waypoint', 'rating', [sequelize.fn('count', sequelize.col('comments.placeId')), 'numComment']],
                where: {
                    id: placeIdReq
                },
                include: [{
                    model: category,
                    attributes: ['categoryName'],
                }, {
                    model: restaurant
                }, {
                    model: touristattraction
                }, {
                    model: hotel
                }, {
                    model: comment,
                }, {
                    model: image,
                    attributes: ['imageName']
                }],
                group: ['place.id', 'comments.id', 'comments.placeId', 'category.id', 'restaurant.id', 'hotel.id', 'touristattraction.id', 'images.id'],
            });

            return Response.success(res, places);
        } catch (e) {
            return Response.error(res, e, HttpStatus.BAD_REQUEST)
        }
    };
    viewTopPlace = async (req, res) => {
        try {
            let places = await placeRepository.find({
                attributes: ['id', 'categoryId', 'locationId', 'placeName', 'description', 'detail', 'address', 'phone', 'waypoint', 'rating', [sequelize.fn('count', sequelize.col('comments.placeId')), 'numComment']],
                include: [{
                    model: category,
                    attributes: ['categoryName'],
                }, {
                    model: comment,
                    attributes: [],
                    duplicating: false,
                    required: false
                }, {
                    model: image,
                    attributes: ['imageName'],
                    duplicating: false,
                    required: false
                }],
                group: ['place.id', 'comments.id', 'comments.placeId', 'category.id', 'images.id'],
                order: ['rating'], limit: 10,
            });
            return Response.success(res, places);
        } catch (e) {
            Response.error(res, e, HttpStatus.BAD_REQUEST);
        }
    };
    viewTop = async (req, res) => {
        try {
            let categories = await categoryRepository.find();
            let categoryIdReq = [];
            for (let i = 0; i < categories.length; i++) {
                categoryIdReq[i] = categories[i].dataValues.id;
            }
            //console.log(categoryIdReq);
            let places = await placeRepository.find({
                attributes: ['id', 'categoryId', 'locationId', 'placeName', 'description', 'detail', 'address', 'phone', 'waypoint', 'rating', [sequelize.fn('count', sequelize.col('comments.placeId')), 'numComment']],
                where: {
                    categoryId: categoryIdReq
                },
                include: [{
                    model: category,
                    attributes: ['categoryName'],
                }, {
                    model: restaurant,
                }, {
                    model: touristattraction
                }, {
                    model: hotel
                }, {
                    model: comment,
                    attributes: [],
                    duplicating: false,
                    required: false
                }, {
                    model: image,
                    attributes: ['imageName'],
                    duplicating: false,
                    required: false
                }],
                group: ['place.id', 'comments.id', 'comments.placeId', 'category.id', 'restaurant.id', 'hotel.id', 'touristattraction.id', 'images.id'],
                order: ['rating'], limit: 10,
            });
            return Response.success(res, places);
        } catch (e) {
            Response.error(res, e, HttpStatus.BAD_REQUEST);
        }
    };
    viewTopByLocationId = async (req, res) => {
        try {
            let locationIdReq = req.param('locationId');
            let categories = await categoryRepository.find();
            let categoryIdReq = [];
            for (let i = 0; i < categories.length; i++) {
                categoryIdReq[i] = categories[i].dataValues.id;
            }
            let places = await placeRepository.find({
                attributes: ['id', 'categoryId', 'locationId', 'placeName', 'description', 'detail', 'address', 'phone', 'waypoint', 'rating', [sequelize.fn('count', sequelize.col('comments.placeId')), 'numComment']],
                where: {
                    categoryId: categoryIdReq,
                    locationId: locationIdReq
                },
                include: [{
                    model: category,
                    attributes: ['categoryName'],
                }, {
                    model: restaurant,
                }, {
                    model: touristattraction
                }, {
                    model: hotel
                }, {
                    model: comment,
                    attributes: [],
                    duplicating: false,
                    required: false
                }, {
                    model: image,
                    attributes: ['imageName'],
                    duplicating: false,
                    required: false
                }],
                group: ['place.id', 'comments.id', 'comments.placeId', 'category.id', 'restaurant.id', 'hotel.id', 'touristattraction.id', 'images.id'],
                order: ['rating'], limit: 10,
            });
            return Response.success(res, places);
        } catch (e) {
            Response.error(res, e, HttpStatus.BAD_REQUEST);
        }
    };
    viewTopByCategoryId = async (req, res) => {
        try {
            let categoryIdReq = req.param('categoryId');
            let places = await placeRepository.find({
                attributes: ['id', 'categoryId', 'locationId', 'placeName', 'description', 'detail', 'address', 'phone', 'waypoint', 'rating', [sequelize.fn('count', sequelize.col('comments.placeId')), 'numComment']],
                where: {
                    categoryId: categoryIdReq
                },
                include: [{
                    model: category,
                    attributes: ['categoryName'],
                }, {
                    model: restaurant,
                }, {
                    model: touristattraction
                }, {
                    model: hotel
                }, {
                    model: comment,
                    attributes: [],
                    duplicating: false,
                    required: false
                }, {
                    model: image,
                    attributes: ['imageName'],
                    duplicating: false,
                    required: false
                }],
                group: ['place.id', 'comments.id', 'comments.placeId', 'category.id', 'restaurant.id', 'hotel.id', 'touristattraction.id', 'images.id'],
                order: ['rating'], limit: 10,
            });
            return Response.success(res, places);
        } catch (e) {
            Response.error(res, e, HttpStatus.BAD_REQUEST);
        }
    };

    viewByLocation = async (req, res) => {
        try {
            let locationIdReq = req.param('locationId');
            console.log(locationIdReq);
            let places = await placeRepository.find({
                attributes: ['id', 'categoryId', 'locationId', 'placeName', 'description', 'detail', 'address', 'phone', 'waypoint', 'rating', [sequelize.fn('count', sequelize.col('comments.placeId')), 'numComment']],
                where: {
                    locationId: locationIdReq
                },
                include: [{
                    model: location,
                    attributes: ['locationName']
                }, {
                    model: restaurant,
                }, {
                    model: touristattraction
                }, {
                    model: hotel
                }, {
                    model: comment,
                    attributes: [],
                    duplicating: false,
                    required: false
                }, {
                    model: image,
                    attributes: ['imageName']
                }],
                group: ['place.id', 'comments.id', 'comments.placeId', 'category.id', 'restaurant.id', 'hotel.id', 'touristattraction.id', 'images.id'],
            });
            return Response.success(res, places);
        } catch (e) {
            return Response.error(res, e, HttpStatus.BAD_REQUEST);
        }
    };
    viewByCategory = async (req, res) => {
        try {
            let categoryIdReq = req.param('categoryId');
            let places = await placeRepository.find({
                attributes: ['id', 'categoryId', 'locationId', 'placeName', 'description', 'detail', 'address', 'phone', 'waypoint', 'rating', [sequelize.fn('count', sequelize.col('comments.placeId')), 'numComment']],
                where: {
                    categoryId: categoryIdReq
                },
                include: [{
                    model: category,
                    attributes: ['categoryName']
                }, {
                    model: restaurant,
                }, {
                    model: touristattraction
                }, {
                    model: hotel
                }, {
                    model: comment,
                    attributes: [],
                    duplicating: false,
                    required: false
                }, {
                    model: image,
                    attributes: ['imageName']
                }],
                group: ['place.id', 'comments.id', 'comments.placeId', 'category.id', 'restaurant.id', 'hotel.id', 'touristattraction.id', 'images.id'],
            });
            return Response.success(res, places)
        } catch (e) {
            return Response.error(res, e, HttpStatus.BAD_REQUEST);
        }
    };
    viewByCategoryAndLocation = async (req, res) => {
        try {
            let categoryIdReq = req.param('categoryId');
            let locationIdReq = req.param('locationId');
            let places = await placeRepository.find({
                attributes: ['id', 'categoryId', 'locationId', 'placeName', 'description', 'detail', 'address', 'phone', 'waypoint', 'rating', [sequelize.fn('count', sequelize.col('comments.placeId')), 'numComment']],
                where: {
                    categoryId: categoryIdReq,
                    locationId: locationIdReq
                },
                include: [{
                    model: category,
                    attributes: ['categoryName']
                }, {
                    model: restaurant,
                }, {
                    model: touristattraction
                }, {
                    model: hotel
                }, {
                    model: comment,
                    attributes: [],
                    duplicating: false,
                    required: false
                }, {
                    model: image,
                    attributes: ['imageName']
                }],
                group: ['place.id', 'comments.id', 'comments.placeId', 'category.id', 'restaurant.id', 'hotel.id', 'touristattraction.id', 'images.id'],
            });
            return Response.success(res, places)
        } catch (e) {
            return Response.error(res, e, HttpStatus.BAD_REQUEST);
        }
    };
    searchByName = async (req, res) => {
        try {
            let query = req.param('query');
            let places = await placeRepository.find({
                attributes: ['id', 'categoryId', 'locationId', 'placeName', 'description', 'detail', 'address', 'phone', 'waypoint', 'rating', [sequelize.fn('count', sequelize.col('comments.placeId')), 'numComment']],
                where: {
                    placeName: {
                        ilike: '%' + query + '%'
                    }
                },
                include: [{
                    model: category,
                    attributes: ['categoryName']
                }, {
                    model: restaurant
                }, {
                    model: hotel
                }, {
                    model: touristattraction
                }, {
                    model: comment,
                    attributes: [],
                }, {
                    model: image,
                    attributes: ['imageName']
                }],
                group: ['place.id', 'comments.id', 'comments.placeId', 'category.id', 'restaurant.id', 'hotel.id', 'touristattraction.id', 'images.id'],
            });
            return Response.success(res, places);
        }
        catch (e) {
            return Response.error(res, e, HttpStatus.BAD_REQUEST);
        }
    };
    searchByNameAndCategory = async (req, res) => {
        try {
            let query = req.param('query');
            let categoryIdReq = req.param('categoryId');
            let places = await placeRepository.find({
                attributes: ['id', 'categoryId', 'locationId', 'placeName', 'description', 'detail', 'address', 'phone', 'waypoint', 'rating', [sequelize.fn('count', sequelize.col('comments.placeId')), 'numComment']],
                where: {
                    categoryId: categoryIdReq,
                    placeName: {
                        ilike: '%' + query + '%'
                    }
                },
                include: [{
                    model: category,
                    attributes: ['categoryName']
                }, {
                    model: restaurant
                }, {
                    model: hotel
                }, {
                    model: touristattraction
                }, {
                    model: comment,
                    attributes: [],
                }, {
                    model: image,
                    attributes: ['imageName']
                }],
                group: ['place.id', 'comments.id', 'comments.placeId', 'category.id', 'restaurant.id', 'hotel.id', 'touristattraction.id', 'images.id'],
            });
            return Response.success(res, places);
        }
        catch (e) {
            return Response.error(res, e, HttpStatus.BAD_REQUEST);
        }
    };
}

export default new PlaceController();