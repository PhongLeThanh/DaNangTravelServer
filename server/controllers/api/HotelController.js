import HttpStatus from 'http-status';
import Response from '../../helpers/Response'
import HotelRepository from '../../repositories/HotelRepository'
import {place} from '../../models/index';

const DB = require('../../config/db-config.json');
const connection = DB['development'];
const Sequelize = require('sequelize');
let sequelize = new Sequelize(connection.database, connection.username, connection.password, connection);

const hotelRepository = new HotelRepository();

class HotelController {
    index = async (req, res) => {
        try {
            let hotels = await hotelRepository.find({
            });
            return Response.success(res, hotels);
        }
        catch (e) {
            return Response.error(res, e, HttpStatus.BAD_REQUEST);
        }
    };
    create = async(req, res) => {
        try {
            //viet ham insert o day
            let data = req.body;
            let returnData = await hotelRepository.create(data);
            return Response.success(res, returnData);
        }
        catch (e) {
            return Response.error(res, e, HttpStatus.BAD_REQUEST);
        }
    }
}

export default new HotelController();