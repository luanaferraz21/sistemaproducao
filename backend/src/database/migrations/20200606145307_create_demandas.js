exports.up = function(knex) {
    return knex.schema.createTable('demandas', function (table) {
        table.increments();
        table.integer('quantidade').notNullable();
        table.date('data').notNullable();
        table.integer('produto_id').notNullable();
        table.foreign('produto_id').references('id').inTable('produtos');
        table.timestamps();
      })
};

exports.down = function(knex) {
    return knex.schema.dropTable('demandas');
};
