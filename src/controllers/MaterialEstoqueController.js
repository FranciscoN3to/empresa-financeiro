
const knex = require('../database')
const CryptoJS = require("crypto-js")

module.exports = {

    async request(request, response){ 
        
        const results = await knex('material_estoque')

        if(results.length === 0) return response.json({  error: 'Sem materiais para mostrar',   dados: [] })

        return response.json({
            error: false,
            dados: results
        })
    
    },
    async create(request, response, next){

        try{

            const {
                nome,
                marca,
                quantidade
            } = request.body
            
            await knex('material_estoque').insert({
                nome,
                marca,
                quantidade
            })

            return response.status(201).send()

        }catch(error){

            next(error)

        }
 
    },
    async update(request, response, next){

        try{

            const { id } = request.params
 
            const { 
                nome,
                marca,
                quantidade
            } = request.body

            await knex('material_estoque').update({
                nome,
                marca,
                quantidade
            }).where({ id })
 
            return response.status(204).send()

        }catch(error){

            next(error)

        }

    },
    async delete(request, response, next){

        try{

            const { id } = request.params

            await knex('material_estoque')
            .where({ id })
            .del()
 
            return response.status(204).send()

        }catch(error){

            next(error)

        }

    }

}


//cnpj.replace(/[^A-Z0-9]+/gi, ''),