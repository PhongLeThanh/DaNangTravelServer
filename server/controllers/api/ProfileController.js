import HttpStatus from 'http-status';
import Response from '../../helpers/Response'
import ProfileRepository from '../../repositories/ProfileRepository'
import {comment, user} from '../../models/index';

const DB = require('../../config/db-config.json');
const connection = DB['development'];
const Sequelize = require('sequelize');
let sequelize = new Sequelize(connection.database, connection.username, connection.password, connection);

const profileRepository = new ProfileRepository();

class ProfileController {
    index = async (req, res) => {
        try {
            let userProfile = await profileRepository.find({
                include : {
                    model : user,
                    attributes: ['username','email','role']
                }
            });
            return Response.success(res, userProfile);
        }
        catch (e) {
            return Response.error(res, e, HttpStatus.BAD_REQUEST);
        }
    };

    view = async (req, res) => {
        try {
            let userId = req.param('id');
            let userProfile = await profileRepository.findOne({
                where: {
                    id: userId
                },include : {
                    model : user,
                    attributes: ['username','email','role']
                }
            });
            return Response.success(res, userProfile);
        }
        catch (e) {
            return Response.error(res, e, HttpStatus.BAD_REQUEST);
        }
    };

    update = async (req, res) => {
        try {
            let profileId = req.param('id');
            let body = req.body;
            let userProfile = await profileRepository.update(body, {
                where: {
                    id: profileId
                }
            });
            return Response.success(res, userProfile)
        } catch (e) {
            return Response.error(res, e, HttpStatus.BAD_REQUEST);
        }
    };
    create = async (req, res) => {
        try {
            let userReq = req.body;
            let userProfile = await profileRepository.create(userReq);
            return Response.success(res, userProfile);
        }
        catch (e) {
            return Response.error(res, e, HttpStatus.BAD_REQUEST);
        }
    };

    // searchByName = async (req, res) => {
    //     try {
    //         console.log(req.body);
    //         let query = req.body.query;
    //         let users = await userRepository.find({
    //             where: {
    //                 username: {
    //                     like: '%' + query + '%'
    //                 }
    //             }
    //         });
    //         return Response.success(res, users);
    //     }
    //     catch (e) {
    //         return Response.error(res, e, HttpStatus.BAD_REQUEST);
    //     }
    // };

}

export default new ProfileController();