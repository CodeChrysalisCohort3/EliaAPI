const Promise = require('bluebird');

module.exports = (knex, Channel) => () => Promise.try(() => knex('channels').select())
  .then(channels => channels.map(channel => new Channel(channel)))
  .catch((err) => {
    if (err) throw console.log('List all channel error');
  });
