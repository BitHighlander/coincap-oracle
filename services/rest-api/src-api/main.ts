/*

     Basic TSOA REST api
            -Highlander
 */

const pjson = require('../package.json');
const TAG = " | "+ pjson.name +" | "
const log = require('@pioneer-platform/loggerdog')()
const cors = require('cors')
import * as bodyParser from 'body-parser';
import * as express from 'express';
import * as methodOverride from 'method-override';

import { RegisterRoutes } from './routes/routes';  // here
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../api/dist/swagger.json')

const app = express();
const server = require('http').Server(app);
let API_PORT = parseInt(process.env["API_PORT_PIONEER"]) || 80

var corsOptions = {
    origin: function (origin, callback) {
        if (true) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    }
}

app.use(cors(corsOptions))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride());

//web
app.use('/',express.static('dist/spa'));

//docs
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

//swagger.json
app.use('/spec', express.static('api/dist'));


//REST API v1
RegisterRoutes(app);  // and here


//Error handeling
function errorHandler (err, req, res, next) {
    if (res.headersSent) {
        return next(err)
    }
    log.error("ERROR: ",err)
    res.status(400).send({
        message: err.message,
        error: err
    });
}
app.use(errorHandler)

let start_server = async function () {
    let tag = TAG + " | start_server | "
    try {

        server.listen(API_PORT, () => console.log(`Server started listening to port ${API_PORT}`));

        return true
    }catch(e){
        log.error(tag,"e: ",e)
        throw e
    }
}
start_server()