import HttpStatus from 'http-status';
import Response from '../../helpers/Response'
import UserRepository from '../../repositories/UserRepository'
import {comment, profile} from '../../models/index';

const DB = require('../../config/db-config.json');
const connection = DB['development'];
const Sequelize = require('sequelize');
let sequelize = new Sequelize(connection.database, connection.username, connection.password, connection);

const userRepository = new UserRepository();

class UserController {
    index = async (req, res) => {
        try {
            let users = await userRepository.find();
            return Response.success(res, users);
        }
        catch (e) {
            return Response.error(res, e, HttpStatus.BAD_REQUEST);
        }
    };

    view = async (req, res) => {
        try {
            let userId = req.param('id');
            let user = await userRepository.findOne({
                where: {
                    id: userId
                },
                include:[{
                    model : profile
                },{
                    model : comment
                }]
            });
            return Response.success(res, user);
        }
        catch (e) {
            return Response.error(res, e, HttpStatus.BAD_REQUEST);
        }
    };

    update = async (req, res) => {
        try {
            let userId = req.param('id');
            let body = req.body;
            let user = await userRepository.update(body, {
                where: {
                    id: userId,

                }, individualHooks:true
            });
            console.log(user)
            return Response.success(res, user)
        } catch (e) {
            return Response.error(res, e, HttpStatus.BAD_REQUEST);
        }
    };
    create = async (req, res) => {
        try {
            console.log(req.body);
            let userReq = req.body;
            let user = await userRepository.create(userReq);
            return Response.success(res, user);
        }
        catch (e) {
            console.log(e);
            return Response.error(res, e, HttpStatus.BAD_REQUEST);
        }
    };
    searchByName = async (req, res) => {
        try {
            console.log(req.body);
            let query = req.body.query;
            let users = await userRepository.find({
                where: {
                    username: {
                        like: '%' + query + '%'
                    }
                }
            });
            return Response.success(res, users);
        }
        catch (e) {
            return Response.error(res, e, HttpStatus.BAD_REQUEST);
        }
    };

}

export default new UserController();