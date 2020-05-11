

exports.up = knex => knex.schema.createTable('users', (table) => {

    table.increments('id').notNullable().unique().comment('Id do usuario')
    table.string('username').notNullable().unique().comment('username/login do usuario')
    table.string('email').notNullable().unique().comment('email/login do usuario')
    table.string('password').notNullable().comment('senha de login do usuario')
    table.string('token_login').notNullable().unique().comment('token de login do usuario')
    table.string('foto').notNullable().comment('foto do usuario')
    table.string('cargo').notNullable().comment('cargo do usuario')
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())

})


exports.down = knex => knex.schema.dropTable('users')
