module.exports = (() => {
    const PORT = process.env.PORT || 3000;

    const product = require('./product');
    const bodyParser = require('body-parser');
    const logger = require('../utils/logger');
    const start = (app) => {

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



        app.listen(PORT, function () {
            logger.info('Started on ' + PORT);
        });


        product.router(app);
    };

    return {
        start: start
    };
})();