import HttpStatus from 'http-status';
import Response from '../../helpers/Response'
import AuthRepository from '../../repositories/AuthRepository'

const authRepository = new AuthRepository();

class AuthController {

    login = async (req, res) => {
        console.log("login controller");
        let data = req.body;
        try {
            let account = await authRepository.authenticate(data);
            console.log(account);
            return Response.success(res, account);
        } catch (e) {
            return Response.error(res, e, HttpStatus.BAD_REQUEST);
        }
    }
}

export default new AuthController();