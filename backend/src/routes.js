const express = require('express');

const canAccess = require('./middleware/canAccess')

const OperadorController = require('./controllers/OperadorController');
const DemandaController = require('./controllers/DemandaController');
const ProdutoController = require('./controllers/ProdutoController');
const LoginController = require('./controllers/LoginController');

const routes = express.Router();

routes.post('/login', LoginController.find);

routes.get('/operador', OperadorController.index);
routes.post('/operador', OperadorController.create);

routes.get('/demandas',canAccess('1'), DemandaController.index);
routes.post('/demandas', DemandaController.create);

routes.get('/produtos', ProdutoController.index);

module.exports = routes;