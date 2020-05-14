require('dotenv').config()

const knex = require('../../database')

const CryptoJS = require("crypto-js")
const GenerateToken = require('./GenerateAccessToken')

module.exports = async (request, response, next) => {
    
    try{

        const { username, password } = request.body

        const user = await knex('users')
                        .where({username, password: CryptoJS.MD5(password).toString()})
                        .orWhere({email: username, password: CryptoJS.MD5(password).toString()})
                        .select('id', 'username', 'email', 'token_login', 'foto', 'cargo')

        if(user.length === 0){ 
            const error = new Error('Login ou senha incorreta')
            error.status = 401
            return next(error) 
        }
        
        const accessToken = GenerateToken.AccessToken(user[0])
        const refrashToken = GenerateToken.RefrashToken(user[0])

        //guardar tokens no banco
        await knex('sessions')
            .insert({type:'access', token_session: accessToken})

        await knex('sessions')
            .insert({type:'refrash', token_session: refrashToken})


        return response.json({ 
            accessToken,
            refrashToken,
            error: false,
            dados: [
                {
                    id: user[0].id,
                    username: user[0].username,
                    email: user[0].email,
                    foto: user[0].foto,
                    privilegio: user[0].cargo
                }
            ]
        })

    }catch(error){

        next(error)

    }
    
}
