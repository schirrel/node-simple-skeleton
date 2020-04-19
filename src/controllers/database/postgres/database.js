/**
 TODO Utilizar https: //www.npmjs.com/package/js-hibernate
 **/

module.exports = (() => {


    const info = require('./info');
    const system = require('./system');


    return {
        info: info,
        system: system
    };
})();