exports.up = function(knex, Promise) {
    return knex.schema.createTable('ingredients', function(tbl){
      tbl.increments();
      tbl.string("name")

      tbl.string("recipe-name")
      .references("name").inTable("recipes");
      
      tbl.integer("amount_of_ingredients");
      tbl.string("units", 20);

    })
  };
  
  exports.down = function(knex, Promise) {
      return knex.schema.dropTableIfExists('ingredients');
  };