/**
 TODO Utilizar https: //www.npmjs.com/package/js-hibernate
 **/
let connection = false;
module.exports = (() => {
    const dotenv = require('dotenv');
    const logger = require('../utils/logger');
    dotenv.config();
    const {
        Client
    } = require('pg');
    const options = {
        connectionString: "postgres://wkarmfwakestnl:feae316b4f50c1c30a77c4f0d4921e43c5ff25daf87d9e797bfdf096467529fa@ec2-52-87-135-240.compute-1.amazonaws.com:5432/d1v26t1qgpt753", 
        port: 5432,
        ssl: true
    };
    const client = new Client(options);
    
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
     
        console.log('getConnection')
 
        if(!client._connected) {
                 client.connect()
            .then((res) => {
                createTables(client);
                CONNECTED = client;
                logger.info("Database Connected", res)
             })
            .catch((res) => { 
                console.log('Problem on connection')});
                connection = false;
        }

            return client;
        };
 

    return {
        getConnection: getConnection
    };
})();