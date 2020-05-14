

exports.up = knex => knex.schema.createTable('sessions', (table) => {

    table.increments('id').notNullable().unique().comment('Id da session')
    table.string('type').notNullable().comment('access, refrash')
    table.text('token_session').notNullable().comment('token da session')
    table.boolean('ativo').defaultTo(true).notNullable().comment('status do token')
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())

})


exports.down = knex => knex.schema.dropTable('sessions')
