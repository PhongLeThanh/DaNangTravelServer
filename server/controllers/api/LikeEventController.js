import HttpStatus from 'http-status';
import Response from '../../helpers/Response'
import {event, user} from '../../models/index';
import LikeEventRepository from "../../repositories/LikeEventRepository";

const DB = require('../../config/db-config.json');
const connection = DB['development'];
const Sequelize = require('sequelize');
let sequelize = new Sequelize(connection.database, connection.username, connection.password, connection);

const likeEventRepository = new LikeEventRepository();
class LikeEventController{
    index = async (req, res) => {
        try {
            let like = await likeEventRepository.find();
            return Response.success(res, like);
        }
        catch (e) {
            return Response.error(res, e, HttpStatus.BAD_REQUEST);
        }
    };
    insert = async (req, res) => {
        try {
            //viet ham insert o day
            let data = req.body;
            let returnData = await likeEventRepository.create(data);
            return Response.success(res, returnData);
        }
        catch (e) {
            return Response.error(res, e, HttpStatus.BAD_REQUEST);
        }
    }
    delete = async (req,res) => {
        try {
            let userIdReq = req.param("userId");
            let eventIdReq = req.param("eventId");
            let returnData = likeEventRepository.delete({
                where: {
                    userId : userIdReq,
                    eventId :eventIdReq
                }
            })
            return Response.success(res,returnData);
        }catch (e) {
            return Response.error(res, e, HttpStatus.BAD_REQUEST);
        }
    }
}
export default new LikeEventController();