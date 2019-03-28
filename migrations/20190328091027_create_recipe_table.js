
exports.up = function(knex, Promise) {
    return knex.schema.createTable('recipes', function(tbl){
      tbl.increments();

      tbl.string("recipe-name", 50)
      .notNullable()
      .unique();

      tbl.string("dish-name").notNullable();

      tbl.foriegn("dish-name").references("name").inTable("dishes");

    })
  };
  
  exports.down = function(knex, Promise) {
      return knex.schema.dropTableIfExists('recipes');
  };