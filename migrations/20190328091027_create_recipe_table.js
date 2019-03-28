
exports.up = function(knex, Promise) {
    return knex.schema.createTable('recipes', function(tbl){
      tbl.increments();

      tbl.string("recipe_name", 50)
      .notNullable()
      .unique();

      tbl.string("dish_name").notNullable().unique();

      tbl.foriegn("dish_name").references("name").inTable("dishes");

    })
  };
  
  exports.down = function(knex, Promise) {
      return knex.schema.dropTableIfExists('recipes');
  };