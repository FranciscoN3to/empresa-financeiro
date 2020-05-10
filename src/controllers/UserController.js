const knex = require('../database')

module.exports = {

    async index(request, response){ 
        
        const results = await knex('users')

        return response.json(results)
    
    },
    async create(request, response, next){

        try{
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
                token_login,
                senha 
            } = request.body

            await knex('users').insert({
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
                token_login,
                senha: senha
            })

            return response.status(201).send()

        }catch(error){

            next(error)

        }
 
    },
    async update(request, response){

    },
    async delete(request, response){

    }

}