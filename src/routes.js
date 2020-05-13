const express = require('express')
const routes = express.Router()

const UserController = require('./controllers/UserController')
const ProdutoServicoController = require('./controllers/ProdutoServicoController')

const AuthenticateToken = require('./auth/controllers/AuthenticateTokenController')

const LoginController = require('./auth/controllers/LoginController')
/** CRUD 
 * Métodos HTTP: GET, POST, PUT, DELETE
 * 
 * Tipos de parâmetros:
 *  Query params: request.query (Filtros, ordenação, paginação...) / GET
 *  Route Params: request.params (Identificar um recurso na alteração ou remoção) / PUT / DELETE
 *  Body: Params: request.body (Dados para criação ou alteração de um registro) POST / PUT 
*/

routes
    .post('/login', LoginController)
    //users routs
    .get('/users', AuthenticateToken, UserController.request)
    .post('/users',  AuthenticateToken, UserController.create)
    .put('/users/:id',  AuthenticateToken, UserController.update)
    .delete('/users/:id',  AuthenticateToken, UserController.delete)
    //serviços e produtos routs 
    .get('/produtoServico',  AuthenticateToken, ProdutoServicoController.request)
    .post('/produtoServico',  AuthenticateToken, ProdutoServicoController.create)
    .put('/produtoServico/:id',  AuthenticateToken, ProdutoServicoController.update)
    .delete('/produtoServico/:id',  AuthenticateToken, ProdutoServicoController.delete)

module.exports = routes