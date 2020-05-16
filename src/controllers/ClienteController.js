
const knex = require('../database')
const moment = require('moment')

module.exports = {

    async request(request, response){ 
        
        const results = await knex('clientes')
    
        if(results.length === 0) return response.json({ error: 'Sem clientes para mostrar', dados: [] })

        return response.json({
            error: false,
            dados: results
        })
    
    },
    async create(request, response, next){

        try{
            const { nome, sobrenome, celular, email } = request.body
            
            await knex('clientes').insert({ 
                nome, 
                sobrenome, 
                celular: celular.replace(/[^A-Z0-9]+/gi, ''), 
                email 
            })

            return response.status(201).send()

        }catch(error){

            next(error)

        }
 
    },
    async update(request, response, next){

        try{

            const { id } = request.params
 
            const { nome, sobrenome, celular, email } = request.body

            await knex('clientes').update({ 
                nome, 
                sobrenome, 
                celular: celular.replace(/[^A-Z0-9]+/gi, ''), 
                email 
            }).where({ id })
 
            return response.status(204).send()

        }catch(error){

            next(error)

        }

    },
    async delete(request, response, next){

        try{

            const { id } = request.params

            await knex('clientes')
            .where({ id })
            .del()
 
            return response.status(204).send()

        }catch(error){

            next(error)

        }

    }

}