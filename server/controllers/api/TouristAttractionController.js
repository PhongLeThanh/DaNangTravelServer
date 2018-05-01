import HttpStatus from 'http-status';
import Response from '../../helpers/Response'
import TouristAttractionRepository from '../../repositories/TouristAttractionRepository'
import {place} from '../../models/index';

const DB = require('../../config/db-config.json');
const connection = DB['development'];
const Sequelize = require('sequelize');
let sequelize = new Sequelize(connection.database, connection.username, connection.password, connection);

const touristAttractionRepository = new TouristAttractionRepository();

class TouristAttractionController {
    index = async (req, res) => {
        try {
            let tourists = await touristAttractionRepository.find({
            });
            return Response.success(res, tourists);
        }
        catch (e) {
            return Response.error(res, e, HttpStatus.BAD_REQUEST);
        }
    };
    create = async(req, res) => {
        try {
            //viet ham insert o day
            let data = req.body;
            let returnData = await touristAttractionRepository.create(data);
            return Response.success(res, returnData);
        }
        catch (e) {
            return Response.error(res, e, HttpStatus.BAD_REQUEST);
        }
    }
}

export default new TouristAttractionController();