require('dotenv').config()

const knex = require('../../database')


const jwt = require('jsonwebtoken')
const GenerateToken = require('./GenerateAccessToken')

module.exports = async (request, response, next) => {

    const RefrashToken = request.body.token

    if(RefrashToken == null || typeof RefrashToken === 'undefined') return response.status(401).send() 
    
    const token = await knex('sessions').where({type: 'refrash', ativo: true, token_session: RefrashToken})

    if(token.length === 0) return response.status(403).send()

    const {sub, name} = jwt.decode(token[0].token_session)

    const userSearch = await knex('users').where({username: name, token_login: sub})

    if(userSearch.length === 0) return response.status(403).send()

    return response.json({accessToken: GenerateToken.AccessToken(userSearch[0])})
    
}
