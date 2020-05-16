
const knex = require('../database')
const CryptoJS = require("crypto-js")

module.exports = {

    async request(request, response){ 
        
        const results = await knex('promocoes')
    
        if(results.length === 0) return response.json({  error: 'Sem promoções para mostrar',   dados: [] })

        return response.json({
            error: false,
            dados: results
        })
    
    },
    async create(request, response, next){

        try{
            const { id_produto, valor, dia_promocao, descricao } = request.body
            
            await knex('promocoes').insert({ id_produto, valor, dia_promocao, descricao })

            return response.status(201).send()

        }catch(error){

            next(error)

        }
 
    },
    async update(request, response, next){

        try{

            const { id } = request.params
 
            const { id_produto, valor, dia_promocao, descricao } = request.body

            await knex('promocoes').update({ id_produto, valor, dia_promocao, descricao }).where({ id })
 
            return response.status(204).send()

        }catch(error){

            next(error)

        }

    },
    async delete(request, response, next){

        try{

            const { id } = request.params

            await knex('promocoes')
            .where({ id })
            .del()
 
            return response.status(204).send()

        }catch(error){

            next(error)

        }

    }

}


//cnpj.replace(/[^A-Z0-9]+/gi, ''),