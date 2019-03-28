// https://stackoverflow.com/questions/6720050/foreign-key-constraints-when-to-use-on-update-and-on-delete
// foriegn key notes

exports.up = function(knex, Promise) {
  return knex.schema.createTable('dishes', function(tbl){
    tbl.increments();
    tbl.string("name")
    .notNullable()
    .unique();
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('dishes');
};
