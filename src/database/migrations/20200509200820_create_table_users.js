

exports.up = knex => knex.schema.createTable('users', table => {

    table.increments('id', 11).comment('Id do usuario')
    table.text('username', 200)
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())

})


exports.down = knex => knex.schema.dropTable('users')
