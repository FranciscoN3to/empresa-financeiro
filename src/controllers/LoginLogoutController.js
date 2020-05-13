require('dotenv').config()

const knex = require('../database')
const jwt = require('jsonwebtoken')
const CryptoJS = require("crypto-js")

module.exports = {

    async login(request, response, next){

        const { username, password } = request.body

        const user = await knex('users')
                        .where({username, password: CryptoJS.MD5(password).toString()})
                        .orWhere({email: username, password: CryptoJS.MD5(password).toString()})
                        .select('id', 'username', 'email', 'token_login', 'foto', 'cargo')

        if(user.length === 0){ return next({message: 'Login ou senha incorreta'}) }
       
        const payLoad = {name: user[0].username, sub: user[0].token_login}

        const accessToken = jwt.sign(payLoad, process.env.ACCESS_TOKEN_SECRET)

        return response.json({ 
            accessToken,
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

        //return response.status(200).send()

       // 

    },
    async logout(request, response){

    }

}