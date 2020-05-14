const express = require('express')
const routs = express()

const LoginController = require('./controllers/LoginController')
const LogoutController = require('./controllers/LogoutController')
const TokenRefreshController = require('./controllers/TokenRefrashController')

routs
    //login & logout
    .post('/login', LoginController)
    .delete('/logout', LogoutController)
    .post('/token', TokenRefreshController)

module.exports = routs