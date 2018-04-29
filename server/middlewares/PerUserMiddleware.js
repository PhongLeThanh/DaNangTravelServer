import JWT from 'jsonwebtoken';
import Model from '../models/index';
import FS from 'fs';
import Path from 'path';
import HTTPStatus from 'http-status';
import Response from '../helpers/Response';

const User = Model.User;
export default class PerUserMiddleware {
    forSpecificAccount = async (req, res, next) => {
        let token;
        if (req.headers && req.headers.authorization) {
            let parts = req.headers.authorization.split(' ');
            if (parts.length === 2) {
                let scheme = parts[0];
                let credentials = parts[1];
                if (/^Bearer$/i.test(scheme)) {
                    token = credentials;
                }
            } else {
                return res.status(HTTPStatus.UNAUTHORIZED)
                    .send(Response.returnError(res, 'Format is Authorization: Bearer [token]', HTTPStatus.UNAUTHORIZED));
            }
        } else if (req.param('token')) {
            token = req.param('token');
            delete req.query.token;
        } else {
            return res.status(HTTPStatus.UNAUTHORIZED)
                .send(Response.returnError(res,'No Authorization header was found', HTTPStatus.UNAUTHORIZED));
        }
        const path = Path.resolve(__dirname, '..', 'config', 'cert', 'public.key');
        const cert = FS.readFileSync(path);
        JWT.verify(token, cert, {algorithms: ['RS256']}, async (error, payload) => {
            if (error) {
                return res.status(HTTPStatus.BAD_REQUEST)
                    .send(Response.returnError(res, error.message, HTTPStatus.BAD_REQUEST));
            }
            try {
                let user = await User.findById(payload.id);
                if (!user) {
                    throw new Error('Not found user!');
                }
                //An account only has UPDATE permission on his own's feeds
                if (user.dataValues.id != req.body.userId) throw new Error('No Permission');
                req.user = user;
                console.log("pass through middleware");
                next();
            } catch (error) {
                return res.status(HTTPStatus.BAD_REQUEST)
                    .send(Response.returnError(res, error.message, HTTPStatus.BAD_REQUEST));
            }
        });
    };
}
