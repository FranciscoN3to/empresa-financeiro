

exports.up = knex => knex.schema.createTable('clientes', (table) => {

    table.increments('id').notNullable().unique().comment('Id do pagamento')
    table.string('nome').notNullable().comment('nome do cliente')
    table.string('sobrenome').comment('sobrenome do cliente')
    table.string('celular').comment('DDD + NUMERO')
    table.string('email').comment('email do cliente')
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())

})


exports.down = knex => knex.schema.dropTable('clientes')
