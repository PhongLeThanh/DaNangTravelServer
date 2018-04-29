import Express from 'express';
import BodyParser from 'body-parser';
import Cors from 'cors';
import Path from 'path';
import Api from './server/routes/api';
import Web from './server/routes/web';
import config from './server/config';

const PORT = config.port;
const app = new Express();

//config app
app.use(Cors());
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({extended: true}));
app.use('/api', Api);
app.use('/', Web);

app.use(Express.static(Path.resolve(__dirname, 'server', 'public')));


//start server
const server = app.listen(PORT, () => {
    console.log(`Listen on port ${PORT}`);
});

//file upload
app.use(Express.static(Path.resolve(__dirname, 'server', 'public'), {maxAge: 31557600000}));


module.exports = app;
