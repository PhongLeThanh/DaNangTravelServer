import HttpStatus from 'http-status';
import Response from '../../helpers/Response'
import LocationRepository from '../../repositories/LocationRepository'
import {district} from '../../models/index';

const DB = require('../../config/db-config.json');
const connection = DB['development'];
const Sequelize = require('sequelize');
let sequelize = new Sequelize(connection.database, connection.username, connection.password, connection);

const locationRepository = new LocationRepository();

class LocationController {
    index = async (req, res) => {
        try {
            let locations = await locationRepository.find();
            let  ArrayDistrictId = [];
            for (let i=0;i<locations.length;i++) {
                ArrayDistrictId[i] = locations[i].dataValues.districtId;
            }
            let location = await locationRepository.find({
                where:{
                    districtId : ArrayDistrictId
                },
                include:{
                    model : district,
                    attributes : ['districtName']
                }
            })
            return Response.success(res, location);
        }
        catch (e) {
            return Response.error(res, e, HttpStatus.BAD_REQUEST);
        }
    };

    create = async(req, res) => {
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
    update = async (req, res) => {
        try{
            let locationId = req.param('id');
            let data = req.body;
            let result = await locationRepository.update(data,{
                where: {
                    id : locationId
                }
            });
            return Response.success(res, result);
        }catch(e){
            Response.error(res, e, HttpStatus.BAD_REQUEST)
        }
    }

}

export default new LocationController();