const routers = require('./router/routers');
const express = require('express');
const app = express();
const logger = require('./utils/logger');
const db = require('./database/Database');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();

const PORT = process.env.PORT || 3000;
console.log(`Your port is ${PORT}`)

app.listen(PORT, function () {
  logger.info('Started on ' + PORT);
});

app.get('/', function (req, res) {
  res.send('Wellcome')
});
        app.use(bodyParser.urlencoded({
            extended: true
        }));
        app.use(bodyParser.json());
        app.use(function (req, res, next) {
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
            res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
            res.setHeader('Access-Control-Allow-Credentials', true);
            next();
        });



app.use(routers);
logger.info('Router setted');
db.query('select 1')

