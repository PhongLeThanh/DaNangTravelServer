import HttpStatus from 'http-status';
import Response from '../../helpers/Response'
import EventRepository from '../../repositories/EventRepository'
import {likeevent} from '../../models/index';
import {event} from "../../models";

const DB = require('../../config/db-config.json');
const connection = DB['development'];
const Sequelize = require('sequelize');
let sequelize = new Sequelize(connection.database, connection.username, connection.password, connection);

const eventRepository = new EventRepository();

class EventController {
    index = async (req, res) => {
        try {
            let events = await eventRepository.find({
                attributes: ['id', 'eventName', 'detail', 'start', 'finish', 'address', 'latitude', 'longitude', 'image', [sequelize.fn('count', sequelize.col('likeevents.eventId')), 'numlike']],
                include: {
                    model: likeevent,
                    attributes: ['userId'],
                    duplicating: false,
                    required: false
                },
                group: ['event.id', 'likeevents.eventId','likeevents.id'],
                order: [
                    ['id', 'DESC']
                ]
            });
            return Response.success(res, events);
        }
        catch (e) {
            return Response.error(res, e, HttpStatus.BAD_REQUEST);
        }
    };

    insert = async (req, res) => {
        try {
            //viet ham insert o day
            let data = req.body;
            let returnData = await eventRepository.create(data);
            return Response.success(res, returnData);
        }
        catch (e) {
            return Response.error(res, e, HttpStatus.BAD_REQUEST);
        }
    };
    update = async (req, res) => {
        try {
            let eventId = req.param('id');
            let data = req.body;
            let returnData = await eventRepository.update(data, {
                where: {
                    id: eventId
                }
            });
            return Response.success(res, returnData);
        } catch (e) {
            Response.error(res, e, HttpStatus.BAD_REQUEST)
        }
    };
    delete = async (req, res) => {
        try {
            let eventId = req.param('id');
            let returnData = await eventRepository.delete({
                where: {
                    id: eventId
                }
            })
            return Response.success(res, returnData);
        } catch (e) {
            return Response.error(res, e, HttpStatus.BAD_REQUEST);
        }
    };
    viewHot = async (req, res) => {
        try {
            let events = await eventRepository.find({
                attributes: ['id', 'eventName', 'detail', 'start', 'finish', 'address', 'latitude', 'longitude', 'image', [sequelize.fn('count', sequelize.col('likeevents.eventId')), 'numlike']],
                include: {
                    model: likeevent,
                    attributes: ['userId'],
                    duplicating: false,
                    required: false
                },
                group: ['event.id', 'likeevents.eventId', "likeevents.id"],
                order: [
                    [sequelize.literal('numlike'), 'DESC']
                ]
            });
            return Response.success(res, events);
        }
        catch (e) {
            return Response.error(res, e, HttpStatus.BAD_REQUEST);
        }
    };
    viewById = async (req, res) => {
        try {
            let eventIdReq = req.param("id");
            let data = await eventRepository.find({
                attributes: ['id', 'eventName', 'detail', 'start', 'finish', 'address', 'latitude', 'longitude', 'image', [sequelize.fn('count', sequelize.col('likeevents.eventId')), 'numlike']],
                where: {
                    id: eventIdReq
                },
                include: {
                    model: likeevent,
                    attributes: ['userId'],
                    duplicating: false,
                    required: false
                },
                group: ['event.id', 'likeevents.eventId', 'likeevents.id'],
            });
            console.log(data);
            return Response.success(res, data);
        } catch (e) {
            return Response.error(res, e, HttpStatus.BAD_REQUEST);
        }
    };
}

export default new EventController();