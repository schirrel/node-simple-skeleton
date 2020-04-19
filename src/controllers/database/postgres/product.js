
module.exports = (() => {

    const conection = require('./conection');
    const utils = require('./utils');

    const client = conection.connectDB();


    const all = async () => {
        const res = await client.query(`select * from ${conection.schema}.PRODUCT`, []);
        let response = await res.rows;
        return response || [];
    };
    const get = async (id) => {
        const res = await client.query(`select * from ${conection.schema}.PRODUCT where id = $1`, [id]);
        let response = await res.rows[0];
        return response || {};
    };

    const maintance = async (system, val) => {
        client.query(`UPDATE  ${conection.schema}.PRODUCT  SET MAINTANCE = $1 WHERE ID = $2`, [val, system], (err, res) => {
            if (err) {
                throw err.stack;
            } else {
                return res;
            }
        });
    };
    const update = async (req) => {
        let params = utils.updatetQueryBuilder(`${conection.schema}.PRODUCT`, req.body);
        client.query(params.string, params.values, (err, res) => {
            if (err) {
                throw err.stack;
            } else {
                return res;
            }
        });

    };

    const save = async (req) => {
        let params = utils.insertQueryBuilder(`${conection.schema}.PRODUCT`, req.body);
        client.query(params.string, params.values, (err, res) => {
            if (err) {
                throw err.stack;
            } else {
                return res;
            }
        });
    }
    const remove = async (id) => {
        const res = await client.query(`delete FROM ${conection.schema}.PRODUCT where id = $1`, [id]);
        let response = await res.rows[0];
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