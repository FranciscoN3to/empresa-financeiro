
const knex = require('../database')
const CryptoJS = require("crypto-js")

module.exports = {

    async request(request, response){ 
        
        const results = await knex('users')

        return response.json(results)
    
    },
    async create(request, response, next){

        try{
            const { 
                username,
                email,
                nome,
                sobrenome,
                cpf,
                cnpj,
                rg,
                celular,
                rua,
                numero,
                bairro,
                cidade,
                estado,
                cep,
                senha 
            } = request.body
            
            await knex('users').insert({
                username,
                email,
                nome,
                sobrenome,
                cpf: cpf.replace(/[^\w\s]/gi, ''),
                cnpj: cnpj.replace(/[^\w\s]/gi, ''),
                rg,
                celular: celular.replace(/[^\w\s]/gi, ''),
                rua,
                numero,
                bairro,
                cidade,
                estado,
                cep: cep.replace(/[^\w\s]/gi, ''),
                token_login: CryptoJS.MD5(cpf).toString(),
                senha: CryptoJS.MD5(senha).toString()
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
                username,
                nome,
                sobrenome,
                cpf,
                cnpj,
                rg,
                celular,
                rua,
                numero,
                bairro,
                cidade,
                estado,
                cep,
     
            } = request.body

            await knex('users').update({
                username,
                nome,
                sobrenome,
                cpf: cpf.replace(/[^A-Z0-9]+/gi, ''), // /[^\w\s]/gi
                cnpj: cnpj.replace(/[^A-Z0-9]+/gi, ''),
                rg,
                celular: celular.replace(/[^A-Z0-9]+/gi, ''),
                rua,
                numero,
                bairro,
                cidade,
                estado,
                cep: cep.replace(/[^A-Z0-9]+/gi, '')
            }).where({ id })
 
            return response.status(204).send()

        }catch(error){

            next(error)

        }

    },
    async delete(request, response, next){

        try{

            const { id } = request.params

            await knex('users')
            .where({ id })
            .del()
 
            return response.status(204).send()

        }catch(error){

            next(error)

        }

    }

}