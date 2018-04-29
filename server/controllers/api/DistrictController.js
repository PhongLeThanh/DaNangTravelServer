import HttpStatus from 'http-status';
import Response from '../../helpers/Response'
import DistrictRepository from '../../repositories/DistrictRepository'

const DB = require('../../config/db-config.json');
const connection = DB['development'];
const Sequelize = require('sequelize');
let sequelize = new Sequelize(connection.database, connection.username, connection.password, connection);

const districtRepository = new DistrictRepository();

class DistrictController {
    index = async (req, res) => {
        try {
            let districts = await districtRepository.find();
            return Response.success(res, districts);
        }
        catch (e) {
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

export default new DistrictController();