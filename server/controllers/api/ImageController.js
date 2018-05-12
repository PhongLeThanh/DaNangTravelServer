import multer from 'multer';
import HTTPStatus from 'http-status';
import Path from 'path';
import uuidv4 from 'uuid/v4';
import Response from '../../helpers/Response'
import ImageRepository from '../../repositories/ImageRepository'
import {place, user} from '../../models/index';

const DB = require('../../config/db-config.json');
const connection = DB['development'];
const Sequelize = require('sequelize');
let sequelize = new Sequelize(connection.database, connection.username, connection.password, connection);

const imageRepository = new ImageRepository();

class ImageController {
    updateDatabase = async (req, res) => {
        try {
            let data = req.body;
            let returnData = await imageRepository.create(data);
            return Response.success(res, returnData);
        } catch (e) {
            return Response.error(res, e, HttpStatus.BAD_REQUEST);
        }
    };
    saveImage = async (req, res) => {
        console.log(req.param('extension'));
        //nhớ gửi từ client: extension trước, photo sau.

        let generatedId = uuidv4();

        try {
            let storage = multer.diskStorage({
                destination: (req, file, callback) => {
                    callback(null, Path.join('.', 'server', 'public', 'uploads'));
                },
                filename: (req, file, callback) => {
                    callback(null, generatedId + '.' + file.originalname.split('.').pop());
                }
            });

            let upload = multer({storage: storage}).any('photo');

            upload(req, res, (err) => {
                if (err) {
                    return Response.returnError(res, err, HTTPStatus.BAD_REQUEST)
                }
                let results = req.files.map((file) => {
                    return {
                        originalName: file.originalname,
                        generatedName: file.filename,
                        imageUrl: 'http://' + req.headers.host + '/api/images/' + file.filename
                    }
                });

                Response.returnSuccess(res, results)
            });
        }
        catch (err) {
            Response.returnError(res, err, HTTPStatus.BAD_REQUEST)
        }
    };

    retrieveImage = async (req, res) => {
        let name = req.param('name');
        return res.sendFile(Path.join(__dirname, '..', '..', 'public', 'uploads', name));
    }
}

export default new ImageController();