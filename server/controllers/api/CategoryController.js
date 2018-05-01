import HttpStatus from 'http-status';
import Response from '../../helpers/Response'
import CategoryRepository from '../../repositories/CategoryRepository'

const DB = require('../../config/db-config.json');
const connection = DB['development'];
const Sequelize = require('sequelize');
let sequelize = new Sequelize(connection.database, connection.username, connection.password, connection);

const categoryRepository = new CategoryRepository();

class CategoryController {
    index = async (req, res) => {
        try {
            let category = await categoryRepository.find();
            return Response.success(res, category);
        }
        catch (e) {
            return Response.error(res, e, HttpStatus.BAD_REQUEST);
        }
    };
}

export default new CategoryController();