
const knex = require('../database')
const moment = require('moment')

module.exports = {

    async request(request, response){ 
        
        const results = await knex('pagamentos')
    
        if(results.length === 0) return response.json({  error: 'Sem pagamentos para mostrar',   dados: [] })

        return response.json({
            error: false,
            dados: results
        })
    
    },
    async create(request, response, next){

        try{
            const { id_venda, numero_parcela, pago, valor, data_pagamento } = request.body
            
            await knex('pagamentos').insert({ 
                id_venda, 
                numero_parcela, 
                pago, 
                valor, 
                data_pagamento: moment(data_pagamento, 'DD/MM/YYYY').format('YYYY-MM-DD')
            })

            return response.status(201).send()

        }catch(error){

            next(error)

        }
 
    },
    async update(request, response, next){

        try{

            const { id } = request.params
 
            const { id_venda, numero_parcela, pago, valor, data_pagamento } = request.body

            await knex('pagamentos').update({ 
                id_venda, 
                numero_parcela, 
                pago, 
                valor, 
                data_pagamento: moment(data_pagamento, 'DD/MM/YYYY').format('YYYY-MM-DD')
             }).where({ id })
 
            return response.status(204).send()

        }catch(error){

            next(error)

        }

    },
    async delete(request, response, next){

        try{

            const { id } = request.params

            await knex('pagamentos')
            .where({ id })
            .del()
 
            return response.status(204).send()

        }catch(error){

            next(error)

        }

    }

}


//cnpj.replace(/[^A-Z0-9]+/gi, ''),