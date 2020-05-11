

exports.up = knex => knex.schema.createTable('material_estoque', (table) => {

    table.increments('id').notNullable().unique().comment('Id do material')
    table.string('nome').notNullable().unique().comment('nome do material')
    table.string('marca').comment('marca do material')
    table.integer('quantidade').defaultTo(0).comment('quantidade do material')
    table.text('descricao').comment('descricao do material')
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())

})


exports.down = knex => knex.schema.dropTable('material_estoque')
