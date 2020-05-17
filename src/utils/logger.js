var Logger = function () { };

Logger.prototype.info = function (...toLog) {
    console.log(new Date() + ' - info:::::' , toLog);
};

Logger.prototype.debug = function (...toLog) {
    console.log(new Date() + ' - debug:::::' , toLog);
};

Logger.prototype.error = function (toLog) {
    console.error(new Date() + ' - error:::::' , toLog);
};

module.exports = new Logger();