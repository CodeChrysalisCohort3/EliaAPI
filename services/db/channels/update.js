const validateNoteName = noteText => typeof noteText === 'string' && noteText.replace(' ', '').length > 1;

const Promise = require('bluebird');

module.exports = (knex, Channel) => (params) => {
  const channelname = params.name.newname;
  
  console.log('channels PARAMS value', params.name.newname);
  return Promise.resolve(() => {
    if (!validateNoteName(channelname)) throw new Error('Note must be provided, and be at least 1 character');
  })
    .then(() => {
      console.log('params update UPDATE values', params.name.oldname, channelname);
      return knex('channels').where("name", params.name.oldname).update("name", channelname);
    })
    .then(updatedRows => {
      if(updatedRows === 0) {
        throw "no updated rows returned";
      }
      return channelname;
    })
    .then(() => {
      console.log('params update SELECT values', params.name.OldName, channelname);
      return knex('channels')
      .where({ name: channelname })
      .select();
    })
    .then((channels) => {
      console.log('params update POP values', params.name.OldName, channelname);
      return new Channel(channels.pop());
    })

    .catch((err) => {
     // console.log('channels ERROR duplicate key', channelname);
      if (err) throw err;
    });
};
