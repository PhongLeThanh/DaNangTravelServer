import HttpStatus from 'http-status';
import Response from '../../helpers/Response'
import RestaurantRepository from '../../repositories/RestaurantRepository'
import {place} from '../../models/index';

const DB = require('../../config/db-config.json');
const connection = DB['development'];
const Sequelize = require('sequelize');
let sequelize = new Sequelize(connection.database, connection.username, connection.password, connection);

const restaurantRepository = new RestaurantRepository();

class RestaurantController {

    index = async (req, res) => {
        try {
            let restaurants = await restaurantRepository.find({
            });
            return Response.success(res, restaurants);
        }
        catch (e) {
            return Response.error(res, e, HttpStatus.BAD_REQUEST);
        }
    };
    create = async(req, res) => {
        try {
            //viet ham insert o day
            let data = req.body;
            let returnData = await restaurantRepository.create(data);
            return Response.success(res, returnData);
        }
        catch (e) {
            return Response.error(res, e, HttpStatus.BAD_REQUEST);
        }
    }
}

export default new RestaurantController();