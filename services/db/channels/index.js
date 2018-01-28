const moment = require('moment');

const Channel = function (dbChannel) {
  this.id = dbChannel.id;
  this.name = dbChannel.name;
  this.createdAt = new Date(dbChannel.created_at);
};

Channel.prototype.serialize = function () {
  return {
    id: this.id,
    name: this.name,
    createdAt: moment(this.createdAt).format('hh:mm:ss'),
  };
};

module.exports = knex => ({
  create: require('./create')(knex, Channel),
  list: require('./list')(knex, Channel),
  update: require('./update')(knex, Channel),
  remove: require('./remove')(knex, Channel),
});
