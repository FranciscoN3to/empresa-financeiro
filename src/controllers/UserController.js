const knex = require('../database')

module.exports = {

    async index(request, response){ 
        
        const results = await knex('users')

        return response.json(results)
    
    },
    async create(request, response, next){

        try{

            await knex('users').insert(request.body)

            return response.json({sucess: true})

        }catch(error){

            next(error)

        }
 
    },
    async update(request, response){

    },
    async delete(request, response){

    }

}