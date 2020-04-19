/**
 TODO Utilizar https: //www.npmjs.com/package/js-hibernate
 **/

module.exports = (() => {
    const dotenv = require('dotenv');
    dotenv.config();


    const {
        Client
    } = require('pg');

    //  const DATABASE_URL = 'postgres://oeqqjbphgmzcxw:0bb53ee8e898286cdda2c0f66cd34406097d0ccdcf58e8c87402988d08c9b406@ec2-174-129-252-228.compute-1.amazonaws.com:5432/dcakbhfuf6oioq';

    //const DATABASE_URL = 'postgres://oeqqjbphgmzcxw:0bb53ee8e898286cdda2c0f66cd34406097d0ccdcf58e8c87402988d08c9b406@ec2-174-129-252-228.compute-1.amazonaws.com:5432/dcakbhfuf6oioq';

    const client = new Client({
        //connectionString: DATABASE_URL,
        /* user: 'postgres',
        host: '192.168.0.17',
        database: 'postgres',
        password: '1911@GRATS', */
        user: process.env.DB_USER,
        host: process.env.DB_URL,
        database: process.env.DB_DATABASE,
        password: process.env.DB_PASSWORD,
        port: 5432
    });

    const connectDB = () => {
        client.connect()
            .then(() => { })
            .catch(() => { });
        return client;
    };

    return {
        connectDB: connectDB,
        //    schema: 'APP_SCHEMA_DEV'
        schema: 'MONITOR'
    };
})();