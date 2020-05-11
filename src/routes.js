const express = require('express')
const routes = express.Router()

const UserController = require('./controllers/UserController')
const ProdutoServicoController = require('./controllers/ProdutoServicoController')

/** CRUD 
 * Métodos HTTP: GET, POST, PUT, DELETE
 * 
 * Tipos de parâmetros:
 *  Query params: request.query (Filtros, ordenação, paginação...) / GET
 *  Route Params: request.params (Identificar um recurso na alteração ou remoção) / PUT / DELETE
 *  Body: Params: request.body (Dados para criação ou alteração de um registro) POST / PUT 
*/

routes
    //users routs
    .get('/users', UserController.request)
    .post('/users', UserController.create)
    .put('/users/:id', UserController.update)
    .delete('/users/:id', UserController.delete)
    //serviços e produtos routs 
    .get('/produtoServico', ProdutoServicoController.request)
    .post('/produtoServico', ProdutoServicoController.create)
    .put('/produtoServico/:id', ProdutoServicoController.update)
    .delete('/produtoServico/:id', ProdutoServicoController.delete)

module.exports = routes