

exports.up = knex => knex.schema.createTable('pagamentos', (table) => {

    table.increments('id').notNullable().unique().comment('Id do pagamento')
    table.integer('id_venda').notNullable().comment('id da venda')
    table.integer('numero_parcela').comment('numero de ordem na qual a parcela se encontra')
    table.boolean('pago').comment('true, false')
    table.decimal('valor', 8, 2).comment('valor da parcela')
    table.timestamp('data_pagamento').comment('data do pagamento, preencher somento quando a coluna "pago":true')
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())

})


exports.down = knex => knex.schema.dropTable('pagamentos')
