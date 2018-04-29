import HttpStatus from 'http-status';


class DataController {
    index = async(req, res) => {

        try {
            return res.status(HttpStatus.OK)
                .send({
                    data: 'ok'
                });
        }
        catch (e) {
            return res.status(HttpStatus.BAD_REQUEST)
                .send()
        }
    }

}

export default new DataController();