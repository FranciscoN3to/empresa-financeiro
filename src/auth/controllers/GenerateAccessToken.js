
const jwt = require('jsonwebtoken')

module.exports = {

    AccessToken(user){
    
        const payLoad = {name: user.username, sub: user.token_login}

        return jwt.sign(payLoad, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '10m'})

    },
    RefrashToken(user){

        const payLoad = {name: user.username, sub: user.token_login}

        return jwt.sign(payLoad, process.env.REFRESH_TOKEN_SECRET)

    }

}