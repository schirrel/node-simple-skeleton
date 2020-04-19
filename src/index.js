const routers = require('./router/routers');
const express = require('express');
const app = express();
const logger = require('./utils/logger');
const dotenv = require('dotenv');
dotenv.config();

console.log(`Your port is ${process.env.PORT}`)

app.use(express.static(__dirname + '/public'));
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
});


routers.start(app);
logger.info('Router setup ok');

