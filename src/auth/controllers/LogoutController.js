require('dotenv').config()

const knex = require('../../database')

module.exports = async (request, response, next) => {

    try{
        
        const RefrashToken = request.body.token

        await knex('sessions')
                .update({ativo: false})
                .where({type: 'refrash', token_session: RefrashToken})

        return response.status(200).send()

    }catch(error){

        next(error)
    
    }


}
