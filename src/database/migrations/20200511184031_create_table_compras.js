

exports.up = knex => knex.schema.createTable('compras', (table) => {

    table.increments('id').notNullable().unique().comment('Id do material')
    table.integer('id_material').comment('id referente ao material')
    table.decimal('valor', 8, 2).comment('valor gasto na compra')
    table.integer('quantidade').comment('quantidade comprada')
    table.timestamp('data_compra').notNullable().comment('data da compra')
    table.text('descricao').defaultTo(0).comment('descricao da compra')
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())

})


exports.down = knex => knex.schema.dropTable('compras')
