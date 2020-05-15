
const knex = require('../database')
const moment = require('moment')

module.exports = {

    async request(request, response){ 
        
        const results = await knex('colaboradores')

        if(results.length === 0) return response.json({  error: 'Sem colaboradores para mostrar',   dados: [] })

        return response.json({
            error: false,
            dados: results
        })
    
    },
    async create(request, response, next){

        try{

            const {nome, sobrenome, email, celular, data_nascimento, cpf, cnpj, rg, endereco_rua, endereco_numero, endereco_bairro, endereco_cidade, endereco_estado, endereco_cep} = request.body
            
            await knex('colaboradores').insert({ 
                nome, 
                sobrenome, 
                email, 
                celular: celular.replace(/[^A-Z0-9]+/gi, ''), 
                data_nascimento: moment(data_nascimento, 'DD/MM/YYYY').format('YYYY-MM-DD'), 
                cpf: cpf.replace(/[^A-Z0-9]+/gi, ''), 
                cnpj: cnpj.replace(/[^A-Z0-9]+/gi, ''), 
                rg, 
                endereco_rua, 
                endereco_numero, 
                endereco_bairro, 
                endereco_cidade,
                endereco_estado, 
                endereco_cep: endereco_cep.replace(/[^A-Z0-9]+/gi, '') 
            })

            return response.status(201).send()
            
        }catch(error){

            next(error)

        }
 
    },
    async update(request, response, next){

        try{

            const { id } = request.params
 
            const {nome, sobrenome, email, celular, data_nascimento, cpf, cnpj, rg, endereco_rua, endereco_numero, endereco_bairro, endereco_cidade, endereco_estado, endereco_cep} = request.body

            await knex('colaboradores').update({                
                nome, 
                sobrenome, 
                email, 
                celular: celular.replace(/[^A-Z0-9]+/gi, ''), 
                data_nascimento: moment(data_nascimento, 'DD/MM/YYYY').format('YYYY-MM-DD'), 
                cpf: cpf.replace(/[^A-Z0-9]+/gi, ''), 
                cnpj: cnpj.replace(/[^A-Z0-9]+/gi, ''), 
                rg, 
                endereco_rua, 
                endereco_numero, 
                endereco_bairro, 
                endereco_cidade,
                endereco_estado, 
                endereco_cep: endereco_cep.replace(/[^A-Z0-9]+/gi, '') 
            }).where({ id })
 
            return response.status(204).send()

        }catch(error){

            next(error)

        }

    },
    async delete(request, response, next){

        try{

            const { id } = request.params

            await knex('colaboradores')
            .where({ id })
            .del()
 
            return response.status(204).send()

        }catch(error){

            next(error)

        }

    }

}