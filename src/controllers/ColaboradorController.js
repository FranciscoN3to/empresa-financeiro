
const knex = require('../database')
 
module.exports = {

    async request(request, response){ 
        
        const results = await knex('colaboradores')

        return response.json(results)
    
    },
    async create(request, response, next){

        try{

            const {nome, sobrenome, email, celular, data_nascimento, cpf, cnpj, rg, endereco_rua, endereco_numero, endereco_bairro, endereco_cidade, endereco_estado, endereco_cep} = request.body
            
            await knex('colaboradores').insert({ nome, sobrenome, email, celular, data_nascimento, cpf, cnpj, rg, endereco_rua, endereco_numero, endereco_bairro, endereco_cidade, endereco_estado, endereco_cep })

            return response.status(201).send()

        }catch(error){

            next(error)

        }
 
    },
    async update(request, response, next){

        try{

            const { id } = request.params
 
            const {nome, sobrenome, email, celular, data_nascimento, cpf, cnpj, rg, endereco_rua, endereco_numero, endereco_bairro, endereco_cidade, endereco_estado, endereco_cep} = request.body

            await knex('colaboradores').update({ nome, sobrenome, email, celular, data_nascimento, cpf, cnpj, rg, endereco_rua, endereco_numero, endereco_bairro, endereco_cidade, endereco_estado, endereco_cep }).where({ id })
 
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