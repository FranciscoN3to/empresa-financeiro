
const knex = require('../database')
const moment = require('moment')

module.exports = {

    async request(request, response){ 
        
        const results = await knex('notificacoes_clientes')
    
        if(results.length === 0) return response.json({ error: 'Sem tarefas para mostrar', dados: [] })

        return response.json({
            error: false,
            dados: results
        })
    
    },
    async create(request, response, next){

        try{
            const { nome, repetir, repeticoes, periodo, horario, mensagem, via, filtro_cliente, filtro_dias } = request.body
            
            await knex('notificacoes_clientes').insert({ 
                nome, repetir, repeticoes, periodo, horario, mensagem, via, filtro_cliente, filtro_dias
            })

            return response.status(201).send()

        }catch(error){

            next(error)

        }
 
    },
    async update(request, response, next){

        try{

            const { id } = request.params
 
            const { nome, repetir, repeticoes, periodo, horario, mensagem, via, filtro_cliente, filtro_dias } = request.body

            await knex('notificacoes_clientes').update({ 
                nome, repetir, repeticoes, periodo, horario, mensagem, via, filtro_cliente, filtro_dias 
            }).where({ id })
 
            return response.status(204).send()

        }catch(error){

            next(error)

        }

    },
    async delete(request, response, next){

        try{

            const { id } = request.params

            await knex('notificacoes_clientes')
            .where({ id })
            .del()
 
            return response.status(204).send()

        }catch(error){

            next(error)

        }

    }

}