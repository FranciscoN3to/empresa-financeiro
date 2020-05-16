
const knex = require('../database')
const moment = require('moment')

module.exports = {

    async request(request, response){ 
        
        const results = await knex('trabalhos_cron_jobs')
    
        if(results.length === 0) return response.json({ error: 'Sem tarefas para mostrar', dados: [] })

        return response.json({
            error: false,
            dados: results
        })
    
    },
    async create(request, response, next){

        try{
            const { id_tarefa, posicao, enviado, ativo, hora_tarefa, data_tarefa } = request.body
            
            await knex('trabalhos_cron_jobs').insert({ 
                id_tarefa, posicao, enviado, ativo, hora_tarefa, data_tarefa
            })

            return response.status(201).send()

        }catch(error){

            next(error)

        }
 
    },
    async update(request, response, next){

        try{

            const { id } = request.params
 
            const { id_tarefa, posicao, enviado, ativo, hora_tarefa, data_tarefa } = request.body

            await knex('trabalhos_cron_jobs').update({ 
                id_tarefa, posicao, enviado, ativo, hora_tarefa, data_tarefa 
            }).where({ id })
 
            return response.status(204).send()

        }catch(error){

            next(error)

        }

    },
    async delete(request, response, next){

        try{

            const { id } = request.params

            await knex('trabalhos_cron_jobs')
            .where({ id })
            .del()
 
            return response.status(204).send()

        }catch(error){

            next(error)

        }

    }

}