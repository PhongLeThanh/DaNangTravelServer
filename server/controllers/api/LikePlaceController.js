import HttpStatus from 'http-status';
import Response from '../../helpers/Response'
import {place, user} from '../../models/index';
import LikePlaceRepository from "../../repositories/LikePlaceRepository";

const DB = require('../../config/db-config.json');
const connection = DB['development'];
const Sequelize = require('sequelize');
let sequelize = new Sequelize(connection.database, connection.username, connection.password, connection);
const likePlaceRepository = new LikePlaceRepository();

class LikePlaceController {
    index = async (req, res) => {
        try {
            let like = await likePlaceRepository.find();
            return Response.success(res, like);
        }
        catch (e) {
            return Response.error(res, e, HttpStatus.BAD_REQUEST);
        }
    };
    view = async (req, res) => {
        try {
            let userIdReq = req.param('userId');
            let placeIdReq = req.param('placeId');
            let likePlace = await likePlaceRepository.find({
                where: {
                    userId: userIdReq,
                    placeId: placeIdReq
                }
            });
            console.log(likePlace);
            return Response.success(res, likePlace);
        } catch (e) {
            return Response.error(res, e, HttpStatus.BAD_REQUEST);
        }
    }
    insert = async (req, res) => {
        try {
            //viet ham insert o day
            let data = req.body;
            let returnData = await likePlaceRepository.create(data);
            return Response.success(res, returnData);
        }
        catch (e) {
            return Response.error(res, e, HttpStatus.BAD_REQUEST);
        }
    }
    delete = async (req, res) => {
        try {
            let data = req.body;
            let userIdReq = data.userId;
            let placeIdReq = data.placeId;
            let returnData = likePlaceRepository.delete({
                where: {
                    userId: userIdReq,
                    placeId: placeIdReq
                }
            })
            return Response.success(res, returnData);
        } catch (e) {
            return Response.error(res, e, HttpStatus.BAD_REQUEST);
        }
    }
}

export default new LikePlaceController();