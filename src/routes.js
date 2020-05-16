const express = require('express')
const routes = express.Router()

const UserController = require('./controllers/UserController')
const ColaboradorController = require('./controllers/ColaboradorController')
const ProdutoServicoController = require('./controllers/ProdutoServicoController')
const MaterialEstoqueController = require('./controllers/MaterialEstoqueController')
const ComprasController = require('./controllers/ComprasController')
const PromocoesController = require('./controllers/PromocoesController')
const VendasController = require('./controllers/VendasController')
const PagamentosController = require('./controllers/PagamentosController')
const ClienteController = require('./controllers/ClienteController')
const ClientesNotificacoesController = require('./controllers/ClientesNotificacoesController')
const TrabalhosCronJobControllers = require('./controllers/TrabalhosCronJobControllers')

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
    .get('/colaborador', AuthenticateToken, ColaboradorController.request)
    .post('/colaborador',  AuthenticateToken, ColaboradorController.create)
    .put('/colaborador/:id',  AuthenticateToken, ColaboradorController.update)
    .delete('/colaborador/:id',  AuthenticateToken, ColaboradorController.delete)
    //serviços e produtos routs 
    .get('/produtoServico',  AuthenticateToken, ProdutoServicoController.request)
    .post('/produtoServico',  AuthenticateToken, ProdutoServicoController.create)
    .put('/produtoServico/:id',  AuthenticateToken, ProdutoServicoController.update)
    .delete('/produtoServico/:id',  AuthenticateToken, ProdutoServicoController.delete)
    //materia estoque routs
    .get('/material', AuthenticateToken, MaterialEstoqueController.request)
    .post('/material',  AuthenticateToken, MaterialEstoqueController.create)
    .put('/material/:id',  AuthenticateToken, MaterialEstoqueController.update)
    .delete('/material/:id',  AuthenticateToken, MaterialEstoqueController.delete)
    //compras routs
    .get('/compras', AuthenticateToken, ComprasController.request)
    .post('/compras',  AuthenticateToken, ComprasController.create)
    .put('/compras/:id',  AuthenticateToken, ComprasController.update)
    .delete('/compras/:id',  AuthenticateToken, ComprasController.delete)
    //promoções routs
    .get('/promocoes', AuthenticateToken, PromocoesController.request)
    .post('/promocoes',  AuthenticateToken, PromocoesController.create)
    .put('/promocoes/:id',  AuthenticateToken, PromocoesController.update)
    .delete('/promocoes/:id',  AuthenticateToken, PromocoesController.delete)
    //vendas routs
    .get('/vendas', AuthenticateToken, VendasController.request)
    .post('/vendas',  AuthenticateToken, VendasController.create)
    .put('/vendas/:id',  AuthenticateToken, VendasController.update)
    .delete('/vendas/:id',  AuthenticateToken, VendasController.delete)
    //pagamentos routs
    .get('/pagamentos', AuthenticateToken, PagamentosController.request)
    .post('/pagamentos',  AuthenticateToken, PagamentosController.create)
    .put('/pagamentos/:id',  AuthenticateToken, PagamentosController.update)
    .delete('/pagamentos/:id',  AuthenticateToken, PagamentosController.delete)
    //clientes routus
    .get('/clientes', AuthenticateToken, ClienteController.request)
    .post('/clientes',  AuthenticateToken, ClienteController.create)
    .put('/clientes/:id',  AuthenticateToken, ClienteController.update)
    .delete('/clientes/:id',  AuthenticateToken, ClienteController.delete)
    //cron jobs notificações clientes routs
    .get('/clientesNotificacoes', AuthenticateToken, ClientesNotificacoesController.request)
    .post('/clientesNotificacoes',  AuthenticateToken, ClientesNotificacoesController.create)
    .put('/clientesNotificacoes/:id',  AuthenticateToken, ClientesNotificacoesController.update)
    .delete('/clientesNotificacoes/:id',  AuthenticateToken, ClientesNotificacoesController.delete)
    //historico cron jobs 
    .get('/trabalhosCronJobs', AuthenticateToken, TrabalhosCronJobControllers.request)
    .post('/trabalhosCronJobs',  AuthenticateToken, TrabalhosCronJobControllers.create)
    .put('/trabalhosCronJobs/:id',  AuthenticateToken, TrabalhosCronJobControllers.update)
    .delete('/trabalhosCronJobs/:id',  AuthenticateToken, TrabalhosCronJobControllers.delete)

module.exports = routes