

exports.up = knex => knex.schema.createTable('colaboradores', (table) => {

    table.increments('id').notNullable().unique().comment('Id do usuario')
    table.string('nome').notNullable()
    table.string('sobrenome')
    table.string('email').notNullable().unique()
    table.string('celular').unique()
    table.date('data_nascimento').notNullable()
    table.string('cpf').notNullable().unique()
    table.string('cnpj').unique()
    table.string('rg').unique()
    table.string('endereco_rua').notNullable()
    table.string('endereco_numero').notNullable()
    table.string('endereco_bairro').notNullable()
    table.string('endereco_cidade').notNullable()
    table.string('endereco_estado').notNullable()
    table.string('endereco_cep')
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())

})


exports.down = knex => knex.schema.dropTable('colaboradores')


