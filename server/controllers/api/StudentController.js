import HttpStatus from 'http-status';
import Response from '../../helpers/Response'
import StudentRepository from '../../repositories/StudentRepository'

const DB = require('../../config/db-config.json');
const connection = DB['development'];
const Sequelize = require('sequelize');
let sequelize = new Sequelize(connection.database, connection.username, connection.password, connection);

const studentRepository = new StudentRepository();

class StudentController {
    index = async (req, res) => {
        try {
            let students = await studentRepository.find();
            return Response.success(res, students);
        }
        catch (e) {
            return Response.error(res, e, HttpStatus.BAD_REQUEST);
        }
    };

    insert = async(req, res) => {
        try {
            //viet ham insert o day
            let data = req.body;
            let returnData = await studentRepository.create(data);
            return Response.success(res, returnData);
        }
        catch (e) {
            return Response.error(res, e, HttpStatus.BAD_REQUEST);
        }
    }

}

export default new StudentController();