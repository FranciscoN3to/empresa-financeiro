
//cron job
exports.up = knex => knex.schema.createTable('notificacoes_clientes', (table) => {

    table.increments('id').notNullable().unique().comment('Id da notificação')
    table.string('nome').notNullable().comment('nome da notificacao')
    table.boolean('repetir').comment('true, false')
    table.integer('repeticoes').comment('numero de repetições caso coluna "repetir": true')
    table.integer('periodo').comment('periodo em dias para as repetições')
    table.time('horario', {precision: 6}).comment('horario para a tarefa ser realizada')
    table.text('mensagem').comment('mensagem da notificacao')
    table.string('via').comment('whatsapp, email')
    table.string('filtro_cliente').comment('ativo, inativo, pagamento_atrasado')
    table.string('filtro_dias').comment('dias referente a coluna "filtro_cliente"')
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())

})


exports.down = knex => knex.schema.dropTable('notificacoes_clientes')
