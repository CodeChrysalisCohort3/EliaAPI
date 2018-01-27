const validateNoteName = noteText => typeof noteText === 'string' && noteText.replace(' ', '').length > 3;

const Promise = require('bluebird');

module.exports = (knex, Channel) => (params) => {
  const channelname = params.name.newName;
  
  console.log('channels PARAMS value', params.name.newName);
  return Promise.resolve(() => {
    if (!validateNoteName(channelname)) throw new Error('Note must be provided, and be at least 3 character');
  })
    .then(() => {
     // console.log('channels insert thennnnnnn', channelname);
    return knex('channels').where("name", params.name.OldName).update("name", channelname);
    })
    .then(updatedRows => {
      if(updatedRows === 0) {
        throw "no updated rows returned";
      }
      return channelname;
    })
    .then(() => {
      return knex('channels')
      .where({ name: channelname })
      .select();
    })
    .then((channels) => {
      return new Channel(channels.pop());
    })

    .catch((err) => {
     // console.log('channels ERROR duplicate key', channelname);
      if (err) throw err;
    });
};
