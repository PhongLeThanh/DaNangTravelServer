import HttpStatus from 'http-status';
import Response from '../../helpers/Response'
import PlaceRepository from '../../repositories/PlaceRepository'
import {category, hotel, location, restaurant, touristattraction} from '../../models/index';

const DB = require('../../config/db-config.json');
const connection = DB['development'];
const Sequelize = require('sequelize');
let sequelize = new Sequelize(connection.database, connection.username, connection.password, connection);

const placeRepository = new PlaceRepository();

class PlaceController {
    index = async (req, res) => {
        try {
            let places = await placeRepository.find({
            });
            console.log(places)
            return Response.success(res, places);
        }
        catch (e) {
            return Response.error(res, e, HttpStatus.BAD_REQUEST);
        }
    };
    create = async(req, res) => {
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
        try{
            let placeId = req.param('id');
            let data = req.body;
            let returnData = await placeRepository.update(returnData,{
                where: {
                    id : placeId
                }
            });
            return Response.success(res, returnData);
        }catch(e){
            Response.error(res, e, HttpStatus.BAD_REQUEST)
        }
    }
    viewByPlaceId = async (req, res) => {
        console.log(new category());
        try {
            let placeIdReq = req.param('id');
            let places = await placeRepository.find({
                where: {
                    id: placeIdReq
                }
            });
            let categoryIdReq = places[0].dataValues.categoryId;
            console.log(categoryIdReq);
            let place = await placeRepository.find({
                where:{
                    categoryId: categoryIdReq
                },
                include:{
                    model : category,
                    attributes :['categoryName']
                }
            });

            return Response.success(res, place);
        } catch (e) {
            return Response.error(res, e, HttpStatus.BAD_REQUEST)
        }
    };
    viewByLocation = async (req, res) => {
        try {
            let locationIdReq = req.param('locationId');
            console.log(locationIdReq);
            let places = await placeRepository.find({
                where: {
                    locationId: locationIdReq
                },
                include: {
                    model : location,
                    attributes: ['locationName']
                }
            });
            console.log(places);
            return Response.success(res, places);
        } catch (e) {
            return Response.error(res, e, HttpStatus.BAD_REQUEST);
        }
    };
    viewByCategory = async (req, res) => {
        try {
            let categoryIdReq = req.param('categoryId');
            let places = await placeRepository.find({
                where: {
                    categoryId: categoryIdReq
                },
                include :{
                    model : category,
                    attributes : ['categoryName']
                }
            });
            return Response.success(res, places)
        } catch (e) {
            return Response.error(res, e, HttpStatus.BAD_REQUEST);
        }
    };


    // insert = async(req, res) => {
    //     try {
    //         //viet ham insert o day
    //         let data = req.body;
    //         let returnData = await locationRepository.create(data);
    //         return Response.success(res, returnData);
    //     }
    //     catch (e) {
    //         return Response.error(res, e, HttpStatus.BAD_REQUEST);
    //     }
    // }

}

export default new PlaceController();