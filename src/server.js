const express = require('express')

const app = express()

app.use(express.json())

/** CRUD 
 * Métodos HTTP: GET, POST, PUT, DELETE
 * 
 * Tipos de parâmetros:
 *  Query params: request.query (Filtros, ordenação, paginação...) / GET
 *  Route Params: request.params (Identificar um recurso na alteração ou remoção) / PUT / DELETE
 *  Body: Params: request.body (Dados para criação ou alteração de um registro) POST / PUT 
*/

app.get('/', (request, response) => {
    //console.log(request.body)
    return response.json({message: 'Ola'})
})

app.listen(3333)