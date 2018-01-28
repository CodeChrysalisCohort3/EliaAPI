const Promise = require('bluebird');
const fs = Promise.promisifyAll(require('fs'));

module.exports = (config) => {

    var services = {};

    fs.readdirSync(__dirname).forEach((fileName) => {

        if(fileName.indexOf('.') === -1){

        var serviceName = fileName;
        services[fileName] = require(`${__dirname}/${fileName}`)(config[fileName]);

        }

    });

    return services;

};
