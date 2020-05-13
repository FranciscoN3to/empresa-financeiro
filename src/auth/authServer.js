const express = require('express')
const routes = require('./routes.js')

const app = express()
app.use(express.json())

app.use(routes)

// notfound
app.use((request, response, next) => {

    const error = new Error('Not found')
    error.status = 404
    next(error)

})

//catch all
app.use((error, request, response, next) => {

    response.status(error.status || 500)
    response.json({error: error.message})

    return response

})

app.listen(4444)