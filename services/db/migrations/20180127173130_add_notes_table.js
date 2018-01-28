
exports.up = function (knex, Promise) {
  return knex.schema.createTable('channels', (t) => {
    t.increments()
      .index();
    t.string('name', 15)
      .unique()
      .notNullable()
      .index();
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('channels');
};
