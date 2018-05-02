import multer from 'multer';
import HTTPStatus from 'http-status';
import Response from '../../helpers/Response';
import Path from 'path';
import uuidv4 from 'uuid/v4';
import mime from 'mime';


class ImageController {

    saveImage = async (req, res) => {


        console.log(req.param('extension'));
        //nhớ gửi từ client: extension trước, photo sau.

        let generatedId = uuidv4();

        try {
            let storage = multer.diskStorage({
                destination: (req, file, callback) => {
                    callback(null, Path.join('.','server','public','uploads'));
                },
                filename: (req, file, callback) => {
                    callback(null, generatedId +'.'+ file.originalname.split('.').pop());
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
                        imageUrl: 'http://' + req.headers.host +'/api/images/'+ file.filename
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