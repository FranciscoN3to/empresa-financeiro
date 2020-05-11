

exports.up = knex => knex.schema.createTable('vendas', (table) => {

    table.increments('id').notNullable().unique().comment('Id da venda')
    table.integer('id_produto').comment('id do produto/servico relacionado a venda')
    table.integer('id_cliente').comment('id do cliente relacionado a venda')
    table.string('pagamento').notNullable().comment('pagamento parcelado ou vitalicio')

    table.decimal('valor', 8, 2).comment('valor do produto ou servico')
    table.string('tipo', 15).notNullable().comment('produto ou servico')
    table.integer('quantidade').defaultTo(0).comment('quantidade de produto')
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())

})


exports.down = knex => knex.schema.dropTable('vendas')