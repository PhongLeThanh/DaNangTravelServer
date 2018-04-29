import IsAuth from './IsAuth';
import IsAdmin from './IsAdmin';
import PerUserMiddleware from './PerUserMiddleware';

module.exports = {
    IsAuth : new IsAuth(),
    IsAdmin: new IsAdmin(),
    PerUserMiddleware: new PerUserMiddleware()
};