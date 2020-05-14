const express = require('express')
const routes = express.Router()

const UserController = require('./controllers/UserController')
const ProdutoServicoController = require('./controllers/ProdutoServicoController')

const AuthenticateToken = require('./auth/controllers/AuthenticateTokenController')

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
    .get('/users', AuthenticateToken, UserController.request)
    .post('/users',  AuthenticateToken, UserController.create)
    .put('/users/:id',  AuthenticateToken, UserController.update)
    .delete('/users/:id',  AuthenticateToken, UserController.delete)
    //colaboradores routs
    .get('/colaborador', AuthenticateToken, (req, res) => {})
    .post('/colaborador',  AuthenticateToken, (req, res) => {})
    .put('/colaborador/:id',  AuthenticateToken, (req, res) => {})
    .delete('/colaborador/:id',  AuthenticateToken, (req, res) => {})
    //serviços e produtos routs 
    .get('/produtoServico',  AuthenticateToken, ProdutoServicoController.request)
    .post('/produtoServico',  AuthenticateToken, ProdutoServicoController.create)
    .put('/produtoServico/:id',  AuthenticateToken, ProdutoServicoController.update)
    .delete('/produtoServico/:id',  AuthenticateToken, ProdutoServicoController.delete)
    //materia estoque routs
    .get('/material', AuthenticateToken, (req, res) => {})
    .post('/material',  AuthenticateToken, (req, res) => {})
    .put('/material/:id',  AuthenticateToken, (req, res) => {})
    .delete('/material/:id',  AuthenticateToken, (req, res) => {})
    //compras routs
    .get('/compras', AuthenticateToken, (req, res) => {})
    .post('/compras',  AuthenticateToken, (req, res) => {})
    .put('/compras/:id',  AuthenticateToken, (req, res) => {})
    .delete('/compras/:id',  AuthenticateToken, (req, res) => {})
    //promoções routs
    .get('/promocoes', AuthenticateToken, (req, res) => {})
    .post('/promocoes',  AuthenticateToken, (req, res) => {})
    .put('/promocoes/:id',  AuthenticateToken, (req, res) => {})
    .delete('/promocoes/:id',  AuthenticateToken, (req, res) => {})
    //vendas routs
    .get('/vendas', AuthenticateToken, (req, res) => {})
    .post('/vendas',  AuthenticateToken, (req, res) => {})
    .put('/vendas/:id',  AuthenticateToken, (req, res) => {})
    .delete('/vendas/:id',  AuthenticateToken, (req, res) => {})
    //pagamentos routs
    .get('/pagamentos', AuthenticateToken, (req, res) => {})
    .post('/pagamentos',  AuthenticateToken, (req, res) => {})
    .put('/pagamentos/:id',  AuthenticateToken, (req, res) => {})
    .delete('/pagamentos/:id',  AuthenticateToken, (req, res) => {})
    //clientes routus
    .get('/clientes', AuthenticateToken, (req, res) => {})
    .post('/clientes',  AuthenticateToken, (req, res) => {})
    .put('/clientes/:id',  AuthenticateToken, (req, res) => {})
    .delete('/clientes/:id',  AuthenticateToken, (req, res) => {})
    //cron jobs notificações clientes routs
    .get('/clientesNotificacoes', AuthenticateToken, (req, res) => {})
    .post('/clientesNotificacoes',  AuthenticateToken, (req, res) => {})
    .put('/clientesNotificacoes/:id',  AuthenticateToken, (req, res) => {})
    .delete('/clientesNotificacoes/:id',  AuthenticateToken, (req, res) => {})


module.exports = routes