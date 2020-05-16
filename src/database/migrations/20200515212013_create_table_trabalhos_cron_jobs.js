
//cron job
exports.up = knex => knex.schema.createTable('trabalhos_cron_jobs', (table) => {

    table.increments('id').notNullable().unique().comment('Id do trabalho')
    table.integer('id_tarefa').notNullable().comment('id relacionado a a tarefa')
    table.integer('posicao').notNullable().comment('posicao no qual o trabalho atual se encontra')
    table.boolean('enviado').comment('true, false')
    table.boolean('ativo').comment('se for true o trabalho ainda continua operacional, se false, o trabalho sera cancelado')
    table.time('hora_tarefa', {precision: 6}).comment('horario de execucao da tarefa')
    table.date('data_tarefa').comment('horario para a tarefa ser realizada')
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())

})


exports.down = knex => knex.schema.dropTable('trabalhos_cron_jobs')
