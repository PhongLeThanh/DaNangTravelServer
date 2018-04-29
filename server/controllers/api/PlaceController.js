import HttpStatus from 'http-status';
import Response from '../../helpers/Response'
import PlaceRepository from '../../repositories/PlaceRepository'

const DB = require('../../config/db-config.json');
const connection = DB['development'];
const Sequelize = require('sequelize');
let sequelize = new Sequelize(connection.database, connection.username, connection.password, connection);

const placeRepository = new PlaceRepository();

class PlaceController {
    index = async (req, res) => {
        try {
            let places = await placeRepository.find();
            return Response.success(res, places);
        }
        catch (e) {
            return Response.error(res, e, HttpStatus.BAD_REQUEST);
        }
    };

    viewByLocation = async (req, res) => {
        try {
            let locationIdReq = req.param('locationId');
            let places = await placeRepository.find({
                where: {
                    locationId: locationIdReq
                }
            });
            return Response.success(req,places);
        } catch (e) {
            return Response.error(res, e, HttpStatus.BAD_REQUEST);
        }
    }
    viewByCategory = async (req,res)=>{
        try {
            let categoryIdReq= req.param('categoryId');
            let places = await placeRepository.find({
                where:{
                    categoryId: categoryIdReq
                }
            });
            return Response.success(req,res)
        }catch(e){
            return Response.error(res, e, HttpStatus.BAD_REQUEST);
        }
    }
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