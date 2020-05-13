const express = require('express')
const routes = express.Router()

const UserController = require('./controllers/UserController')
const ProdutoServicoController = require('./controllers/ProdutoServicoController')

const authenticateToken = require('./auth/controllers/authenticateTokenController')

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
    .get('/users', authenticateToken, UserController.request)
    .post('/users',  authenticateToken, UserController.create)
    .put('/users/:id',  authenticateToken, UserController.update)
    .delete('/users/:id',  authenticateToken, UserController.delete)
    //serviços e produtos routs 
    .get('/produtoServico',  authenticateToken, ProdutoServicoController.request)
    .post('/produtoServico',  authenticateToken, ProdutoServicoController.create)
    .put('/produtoServico/:id',  authenticateToken, ProdutoServicoController.update)
    .delete('/produtoServico/:id',  authenticateToken, ProdutoServicoController.delete)

module.exports = routes