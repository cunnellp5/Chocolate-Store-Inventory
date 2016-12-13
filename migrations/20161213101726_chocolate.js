
exports.up = function(knex, Promise) {
  return knex.schema.createTable('chocolate', function(table){
    table.increments();
    table.string('name').notNullable();
    table.decimal('price_lb').notNullable();
    table.string('type').notNullable();
    table.string('delicious_factor').nullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('chocolate');
};
