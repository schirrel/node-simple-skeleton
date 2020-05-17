/**
 TODO Utilizar https: //www.npmjs.com/package/js-hibernate
 **/
let connection = false;
module.exports = (() => {
    const dotenv = require('dotenv');
    const logger = require('../../utils/logger');
    dotenv.config();
    const {
        Client
    } = require('pg');

    const client = new Client({
        user: process.env.DB_USER,
        host: process.env.DB_URL,
        database: process.env.DB_DATABASE,
        password: process.env.DB_PASSWORD,
        port: 5432,
        ssl: true
    });
    const createTables = (client) => {

        client.query( `
        CREATE TABLE IF NOT EXISTS EXTENSAO (
        ID serial,
        EMAIL VARCHAR (50) UNIQUE,
        PASSWORD VARCHAR (50),
        LAST_PAYMENT date);
        `);
        client.query( `
        CREATE TABLE IF NOT EXISTS LOGIN (
          ID serial,
          USUARIO VARCHAR (50) UNIQUE,
          SENHA VARCHAR (50)
        );
        `);
       
    }

    const getConnection = () => {
        if(!connection) {
                 client.connect()
            .then((res) => {
                createTables(client);
                CONNECTED = client;
                logger.info("Database Connected")
             })
            .catch((res) => { 
                console.log('Problem on connection')});
                connection = true;
        }

            return client;
        };
 

    return {
        getConnection: getConnection
    };
})();