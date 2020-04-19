
module.exports = (() => {

    const conection = require('./conection');
    const utils = require('./utils');
    const updateUtils = require('./updateUtils');
    const sql = require("mssql");

    let client = null;

    (async () => {
        client = client || await conection.connectDB();
    })()



    const all = async () => {
        client = client || await conection.connectDB();
        const res = await client.request().query(`select * from ${conection.schema}.PRODUCT`);
        let response = await res.recordset;
        return response || [];
    };
    const get = async (id) => {
        client = client || await conection.connectDB();
        let request = await client.request();
        request.input('id', utils.getType(id), id);
        const res = await request.query(`select * from ${conection.schema}.PRODUCT where id = @id `);
        let response = await res.recordset[0];
        return response || {};
    };

    const maintance = async (product, val) => {
        client = client || await conection.connectDB();
        let request = await client.request();
        val = val === true ? 1 : val === false ? 0 : val;
        request.query(`UPDATE  ${conection.schema}.PRODUCT  SET MAINTANCE = ${val} WHERE ID = '${product}'`).then((res) => {
            return res;
        }).catch((err) => {
            console.log(err);
        });
    };
    const update = async (req) => {
        client = client || await conection.connectDB();
        let request = await client.request();
        let queryString = updateUtils.updatetQueryBuilder(`${conection.schema}.PRODUCT`, req.body, true).string;
        try {
            request.query(queryString).then((err, res) => {
                if (err) {
                    throw err.stack;
                } else {
                    return res;
                }
            }).catch((err, res) => {
                if (err) {
                    throw err.stack;
                } else {
                    return res;
                }
            });
        } catch (err) {
            console.log(err);
        }
    };

    const save = async (req) => {
        try {
            client = client || await conection.connectDB();
            let params = utils.insertQueryBuilder(`${conection.schema}.PRODUCT`, req.body);
            let request = await client.request();
            params.values.forEach(input => {
                if (input && input.hasOwnProperty('name')) {
                    request.input(input.name, input.type, input.value);
                }
            });
            request.query(params.string).then((err, res) => {
                if (err) {
                    throw err.stack;
                } else {
                    return res;
                }
            });
        } catch (err) {
            console.log(err);
        }
    }
    const remove = async (id) => {
        client = client || await conection.connectDB();
        const res = await client.query(`delete FROM ${conection.schema}.PRODUCT where id = '${id}'`);
        let recordset = await res.recordset;
        let response = recordset && recordset.length ? recordset[0] : null;
        return response || {};
    };

    return {
        maintance: maintance,
        get: get,
        all: all,
        update: update,
        save: save,
        remove: remove

    };
})();