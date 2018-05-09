import HttpStatus from 'http-status';
import Response from '../../helpers/Response'
import CommentRepository from '../../repositories/CommentRepository'
import {place, user,profile} from '../../models/index';

const DB = require('../../config/db-config.json');
const connection = DB['development'];
const Sequelize = require('sequelize');
let sequelize = new Sequelize(connection.database, connection.username, connection.password, connection);

const commentRepository = new CommentRepository();

class DistrictController {
    index = async (req, res) => {
        try {
            let comments = await commentRepository.find();
            return Response.success(res, comments);
        }
        catch (e) {
            return Response.error(res, e, HttpStatus.BAD_REQUEST);
        }
    };

    insert = async(req, res) => {
        try {
            //viet ham insert o day
            let data = req.body;
            let returnData = await commentRepository.create(data);
            return Response.success(res, returnData);
        }
        catch (e) {
            return Response.error(res, e, HttpStatus.BAD_REQUEST);
        }
    }
    viewByPlaceId = async (req, res) => {
        try{
            let placeIdReq = req.param('placeId');
            let comments = await commentRepository.find({
                where: {
                    placeId : placeIdReq
                },
                include : [{
                    model : user,
                    attributes :['username','avatar']
                }]

            });
            return Response.success(res, comments);
        }catch (e) {
            return Response.error(res,e, HttpStatus.BAD_REQUEST);
        }
    }
    viewByUserId = async (req, res) => {
        try{
            let userIdReq = req.param('userId');
            let comments = await commentRepository.find({
                where: {
                    userId : userIdReq
                },
                include : [{
                    model : user,
                    attributes :['username','avatar'],
                },{
                    model : place,
                    attributes : ['placeName']
                }]
            });
            return Response.success(res, comments);
        }catch (e) {
            return Response.error(res,e, HttpStatus.BAD_REQUEST);
        }
    }

}

export default new DistrictController();