
const knex = require('../database')
const CryptoJS = require("crypto-js")

module.exports = {

    async request(request, response){ 
        
        const results = await knex('users')
    
        if(results.length === 0) return response.json({  error: 'Sem usuários para mostrar',   dados: [] })

        return response.json({
            error: false,
            dados: results
        })
    
    },
    async create(request, response, next){

        try{
            const { 
                username,
                email,
                password,
                foto
            } = request.body
            
            await knex('users').insert({
                username,
                email,
                password: CryptoJS.MD5(password).toString(),
                token_login: CryptoJS.MD5(email + password).toString(),
                foto,
                cargo: 'adm'
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
                email,
                password,
                foto
            } = request.body

            await knex('users').update({
                username,
                email,
                password: CryptoJS.MD5(password).toString(),
                foto
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


//cnpj.replace(/[^A-Z0-9]+/gi, ''),