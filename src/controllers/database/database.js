/**
 TODO Utilizar https: //www.npmjs.com/package/js-hibernate
 **/

module.exports = (() => {
    const dotenv = require('dotenv');
    dotenv.config();

    const product = process.env.DB === 'pg' ? require('./postgres/product') : process.env.DB === 'mssql' ? require('./mssql/product') : null;
    return {
        product: product
    };
})();