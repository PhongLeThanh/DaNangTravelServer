import JWT from 'jsonwebtoken';
import Model from '../models';
import FS from 'fs';
import Path from 'path';
import Config from '../config';

const user = Model.user;

export default class AuthRepository {

    async authenticate(data) {
        let {username, password} = data;
        try {
            let users = await user.findOne({
                where: {
                    username: username,
                    role: 2,
                },
            });
            if (!users) {
                throw new Error('Not found account');
            } else if (users.validatePassword(password)) {
                const path = Path.resolve(__dirname, '..', 'config', 'cert', 'private.key')
                const cert = FS.readFileSync(path);
                const token = JWT.sign(
                    {
                        id: users.id,
                        role: users.role
                    },
                    cert,
                    {
                        algorithm: 'RS256',
                        expiresIn: Config.expireTime
                    },
                );
                //-----------------
                const refreshToken = JWT.sign(
                    {
                        id: users.id,
                        role: users.role
                    },
                    cert,
                    {
                        algorithm: 'RS256',
                        expiresIn: Config.refreshTokenExpire
                    },
                );

                //-----------------
                let userJson = users.toJSON();
                userJson.token = token;
                userJson.refreshToken = refreshToken;
                return userJson;
            } else {
                throw new Error('Wrong password');
            }
        } catch (e) {
            throw new Error(e);
        }
    }
}