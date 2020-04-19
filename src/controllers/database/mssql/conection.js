/**
 TODO Utilizar https: //www.npmjs.com/package/js-hibernate
 **/

module.exports = (() => {

    const dotenv = require('dotenv');
    dotenv.config();

    const sql = require("mssql");
    const config = {
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        server: process.env.DB_URL, // You can use 'localhost\\instance' to connect to named instance
        database: process.env.DB_DATABASE,
        enableArithAbort: false
    }


    const connectDB = async () => {
        let connection = await sql.connect(config);
        return connection;
    };

    return {
        connectDB: connectDB,
        schema: 'APP_SCHEMA_DEV'
        //  schema: 'MONITOR'
    };
})();