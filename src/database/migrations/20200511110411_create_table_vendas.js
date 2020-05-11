

exports.up = knex => knex.schema.createTable('vendas', (table) => {

    table.increments('id').notNullable().unique().comment('Id da venda')
    table.integer('id_produto').comment('id do produto/servico relacionado a venda')
    table.integer('id_cliente').comment('id do cliente relacionado a venda')
    table.integer('id_colaborador').comment('id do funcionario relacionado a venda')
    table.decimal('valor', 8, 2).comment('valor inteiro da venda')
    table.string('tipo_pagamento').notNullable().comment('parcelado ou a vista')
    table.integer('numero_parcelas').comment('numero de parcelas da venda')
    table.string('tipo', 15).notNullable().comment('produto ou servico')
    table.text('descricao').comment('descricao da venda')
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())

})


exports.down = knex => knex.schema.dropTable('vendas')