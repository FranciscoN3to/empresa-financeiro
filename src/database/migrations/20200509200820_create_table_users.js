

exports.up = knex => knex.schema.createTable('users', (table) => {

    table.increments('id').notNullable().unique().comment('Id do usuario')
    table.string('username').notNullable().unique().comment('username/login do usuario')
    table.string('email').notNullable().unique().comment('email/login do usuario')
    table.string('nome').notNullable()
    table.string('sobrenome')
    table.string('cpf').notNullable().unique()
    table.string('cnpj')
    table.string('rg').unique()
    table.string('celular').unique()
    table.text('rua').notNullable()
    table.string('numero').notNullable()
    table.string('bairro').notNullable()
    table.string('cidade').notNullable()
    table.string('estado').notNullable()
    table.text('cep').notNullable()
    table.text('token_login')
    table.text('senha').notNullable()
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())

})


exports.down = knex => knex.schema.dropTable('users')
