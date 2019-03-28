
exports.up = function(knex, Promise) {
    return knex.schema.createTable('recipes', function(tbl){
      tbl.increments();
      tbl.string("dish-name")
      .notNullable().references("name").inTable("dishes")
      
      tbl.string("recipe-name", 50)
      .notNullable()
      .unique();

      // how to add ingredients? 

    })
  };
  
  exports.down = function(knex, Promise) {
      return knex.schema.dropTableIfExists('recipes');
  };