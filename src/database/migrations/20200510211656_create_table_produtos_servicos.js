

exports.up = knex => knex.schema.createTable('produtos_servicos', (table) => {

    table.increments('id').notNullable().unique().comment('Id do produto ou servico')
    table.string('nome').notNullable().unique().comment('nome do produto ou servico')
    table.string('tipo', 15).notNullable().comment('produto / servico')
    table.string('marca').comment('marca do produto')
    table.decimal('valor', 8, 2).comment('valor do produto ou servico')
    table.integer('quantidade').defaultTo(0).comment('quantidade de produto')
    table.string('descricao').comment('descricao do produto ou servico')
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())

})


exports.down = knex => knex.schema.dropTable('produtos_servicos')
