const validateNoteName = noteText => typeof noteText === 'string' && noteText.replace(' ', '').length > 3;

const Promise = require('bluebird');

module.exports = (knex, Channel) => (params) => {
  const channelname = params.name;
  //console.log('channels PARAMS value', params);
  return Promise.resolve(() => {
    if (!validateNoteName(channelname)) throw new Error('Note must be provided, and be at least 3 character');
  })
    .then(() => {
     // console.log('channels insert thennnnnnn', channelname);
    return knex('channels').insert({ name: channelname });
    })
    .then(() => { 
     // console.log('channels sELECT', channelname);
      return knex('channels')
      .where({ name: channelname })
      .select();
    })
    .then(channels => {
    //  console.log('channels pop ELEMENT', channelname);
      return new Channel(channels.pop());
    })
    .catch((err) => {
     // console.log('channels ERROR duplicate key', channelname);
      if (err.message.match('duplicate key value')) throw new Error('That note already exists');
      throw err;
    });
};
