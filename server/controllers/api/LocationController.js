import HttpStatus from 'http-status';
import Response from '../../helpers/Response'
import LocationRepository from '../../repositories/LocationRepository'

const DB = require('../../config/db-config.json');
const connection = DB['development'];
const Sequelize = require('sequelize');
let sequelize = new Sequelize(connection.database, connection.username, connection.password, connection);

const locationRepository = new LocationRepository();

class LocationController {
    index = async (req, res) => {
        try {
            let locations = await locationRepository.find();
            return Response.success(res, locations);
        }
        catch (e) {
            return Response.error(res, e, HttpStatus.BAD_REQUEST);
        }
    };

    insert = async(req, res) => {
        try {
            //viet ham insert o day
            let data = req.body;
            let returnData = await locationRepository.create(data);
            return Response.success(res, returnData);
        }
        catch (e) {
            return Response.error(res, e, HttpStatus.BAD_REQUEST);
        }
    }

}

export default new LocationController();