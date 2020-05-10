const express = require('express')
const routes = require('./routes')

const app = express()
app.use(express.json())
app.use(routes)


//catch all
app.use((error, request, response, next) => {
    response.status(error.status || 500)
    response.json({error: error.message})

    return response
})

app.listen(3333)