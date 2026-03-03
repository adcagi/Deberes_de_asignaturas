exports.up = function(knex) {
  return knex.schema.createTable('productos', (table) => {
    table.increments('id').primary();
    table.string('nombre').notNullable();
    table.integer('cantidad').defaultTo(0);
    table.float('precio').defaultTo(0);
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('productos');
};