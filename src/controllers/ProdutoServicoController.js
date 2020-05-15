
const knex = require('../database')
 
module.exports = {

    async request(request, response){ 
        
        const results = await knex('produtos_servicos')

        if(results.length === 0) return response.json({  error: 'Sem produtos para mostrar',   dados: [] })

        return response.json({
            error: false,
            dados: results
        })
    
    },
    async create(request, response, next){

        try{
            const {nome, valor, tipo, quantidade} = request.body
            
            await knex('produtos_servicos').insert({ nome,  valor, tipo, quantidade })

            return response.status(201).send()

        }catch(error){

            next(error)

        }
 
    },
    async update(request, response, next){

        try{

            const { id } = request.params
 
            const {nome, valor, tipo, quantidade} = request.body

            await knex('produtos_servicos').update({ nome, valor, tipo, quantidade }).where({ id })
 
            return response.status(204).send()

        }catch(error){

            next(error)

        }

    },
    async delete(request, response, next){

        try{

            const { id } = request.params

            await knex('produtos_servicos')
            .where({ id })
            .del()
 
            return response.status(204).send()

        }catch(error){

            next(error)

        }

    }

}