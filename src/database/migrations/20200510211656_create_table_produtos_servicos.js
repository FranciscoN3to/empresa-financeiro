

exports.up = knex => knex.schema.createTable('produtoServico', (table) => {

    table.increments('id').notNullable().unique().comment('Id do produto ou servico')
    table.string('nome').notNullable().unique().comment('nome do produto ou servico')
    table.decimal('valor', 8, 2).comment('valor do produto ou servico')
    table.string('tipo', 15).notNullable().comment('produto ou servico')
    table.integer('quantidade').defaultTo(0).comment('quantidade de produto')
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())

})


exports.down = knex => knex.schema.dropTable('produtoServico')
