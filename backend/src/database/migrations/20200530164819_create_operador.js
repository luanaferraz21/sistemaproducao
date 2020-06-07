
exports.up = function(knex) {
    return knex.schema.createTable('operadores', function (table) {
        table.increments();
        table.string('nome').notNullable();
        table.string('email').notNullable();
        table.string('cargo').notNullable();
        table.date('data').notNullable();
        table.time('entrada', { precision: 6 }).notNullable();
        table.time('saida', { precision: 6 }).notNullable();
        table.timestamps();
      })
};

exports.down = function(knex) {
    return knex.schema.dropTable('operadores');
};
