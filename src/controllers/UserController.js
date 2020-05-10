const knex = require('../database')

module.exports = {

    async index(request, response){ 
        
        const results = await knex('users')

        return response.json(results)
    
    }

}