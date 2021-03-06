//cria tabela
exports.up = function (knex) {
    return knex.schema.createTable('incidents', function (table) {
        //primary key
        table.increments();
        //campos tabela
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();
        //relacionamento
        table.string('ong_id').notNullable();
        //chave estrangeira
        table.foreign('ong_id').references('id').inTable('ongs');
    });
};
//deleta tabela
exports.down = function (knex) {
    return knex.schema.dropTable('incidents');
};