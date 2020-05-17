module.exports = (() => {

    const cron = require('node-cron');

    const logger = require('../../utils/logger');

    const start = () => {
        service.requests();
        cron.schedule(' * 1 * * *', () => {
            logger.info('Running requests');
            // VALIDATE LICENSE
        });
    };
    return {
        start: start
    };
})();