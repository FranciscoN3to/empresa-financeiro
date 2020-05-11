

exports.up = knex => knex.schema.createTable('promocoes', (table) => {

    table.increments('id').notNullable().unique().comment('Id do material')
    table.integer('id_produto').comment('id referente ao produto ou servico')
    table.decimal('valor', 8, 2).comment('valor da promoção')
    table.string('dia_promocao').comment('dia da semana')
    table.text('descricao').comment('descricao da promocao')
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())

})


exports.down = knex => knex.schema.dropTable('promocoes')
