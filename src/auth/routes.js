const express = require('express')
const routs = express()

const LoginController = require('./controllers/LoginController')

routs
    //login & logout
    .post('/login', LoginController)
    .put('/logout', (request, response) => {

    })

module.exports = routs