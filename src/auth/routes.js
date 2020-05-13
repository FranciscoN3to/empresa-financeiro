const express = require('express')
const LoginLogoutController = require('./controllers/LoginLogoutController')
const routs = express()

routs
    //login & logout
    .post('/login', LoginLogoutController.login)
    .put('/logout', LoginLogoutController.logout)

module.exports = routs