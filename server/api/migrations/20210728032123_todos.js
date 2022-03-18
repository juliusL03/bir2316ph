
exports.up = async knex => {
    await knex.schema.createTable('todos', tbl => {
      tbl.increments();
      tbl.text('message', 256).notNullable();
    });
  };
  
  exports.down = async knex => {
    await knex.schema.dropTableIfExists('todos');
  };


// // Todo migration example foreign
// exports.up = function(knex, Promise) { 
//   return knex.schema.createTable('todo', function(table){ 
//     table.increments(); 
//     table.text('title').notNullable(); 
//     table.integer('priority').notNullable(); 
//     table.text('description'); 
//     table.boolean('done').notNullable().defaultTo(false); 
//     table.timestamps(); table.integer('userID').unsigned(); 
//     table.foreign('userID').references('id').inTable('users').onDelete('CASCADE').onUpdate('CASCADE');
//    }); 
//   }

// exports.down = function(knex, Promise) { 
//   return knex.schema.dropTable('todo');
//  }