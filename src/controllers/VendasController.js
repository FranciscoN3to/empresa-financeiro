
const knex = require('../database')
const CryptoJS = require("crypto-js")

module.exports = {

    async request(request, response){ 
        
        const results = await knex('vendas')
    
        if(results.length === 0) return response.json({  error: 'Sem vendas para mostrar',   dados: [] })

        return response.json({
            error: false,
            dados: results
        })
    
    },
    async create(request, response, next){

        try{
            const { id_produto, id_cliente, id_colaborador, valor, tipo_pagamento, numero_parcelas, tipo, descricao } = request.body
            
            await knex('vendas').insert({ id_produto, id_cliente, id_colaborador, valor, tipo_pagamento, numero_parcelas, tipo, descricao })

            return response.status(201).send()

        }catch(error){

            next(error)

        }
 
    },
    async update(request, response, next){

        try{

            const { id } = request.params
 
            const { id_produto, id_cliente, id_colaborador, valor, tipo_pagamento, numero_parcelas, tipo, descricao } = request.body

            await knex('vendas').update({ id_produto, id_cliente, id_colaborador, valor, tipo_pagamento, numero_parcelas, tipo, descricao }).where({ id })
 
            return response.status(204).send()

        }catch(error){

            next(error)

        }

    },
    async delete(request, response, next){

        try{

            const { id } = request.params

            await knex('vendas')
            .where({ id })
            .del()
 
            return response.status(204).send()

        }catch(error){

            next(error)

        }

    }

}


//cnpj.replace(/[^A-Z0-9]+/gi, ''),