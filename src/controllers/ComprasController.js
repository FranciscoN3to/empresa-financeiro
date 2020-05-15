
const knex = require('../database')
const moment = require('moment')

module.exports = {

    async request(request, response){ 
        
        const results = await knex('compras')

        if(results.length === 0) return response.json({  error: 'Sem compras para mostrar',   dados: [] })

        return response.json({
            error: false,
            dados: results
        })
    
    },
    async create(request, response, next){

        try{

            const { id_material, valor, quantidade, data_compra, descricao } = request.body
            
            await knex('compras').insert({ 
                id_material, 
                valor, 
                quantidade, 
                data_compra: moment(data_compra, 'DD/MM/YYYY').format('YYYY-MM-DD'), 
                descricao 
            })

            return response.status(201).send()

        }catch(error){

            next(error)

        }
 
    },
    async update(request, response, next){

        try{

            const { id } = request.params
 
            const { id_material, valor, quantidade, data_compra, descricao } = request.body

            await knex('compras').update({ 
                id_material, 
                valor, 
                quantidade, 
                data_compra: moment(data_compra, 'DD/MM/YYYY').format('YYYY-MM-DD'), 
                descricao 
            }).where({ id })
 
            return response.status(204).send()

        }catch(error){

            next(error)

        }

    },
    async delete(request, response, next){

        try{

            const { id } = request.params

            await knex('compras')
            .where({ id })
            .del()
 
            return response.status(204).send()

        }catch(error){

            next(error)

        }

    }

}


//cnpj.replace(/[^A-Z0-9]+/gi, ''),