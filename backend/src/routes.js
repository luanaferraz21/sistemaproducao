const express = require('express');

const canAccess = require('./middleware/canAccess')

const OperadorController = require('./controllers/OperadorController');
const DemandaController = require('./controllers/DemandaController');
const ProdutoController = require('./controllers/ProdutoController');
const LoginController = require('./controllers/LoginController');

const routes = express.Router();

routes.post('/login', LoginController.find);

routes.get('/operador', canAccess('1'), OperadorController.index);
routes.post('/operador', canAccess('1'), OperadorController.create);

routes.get('/demandas',canAccess('1'), DemandaController.index);
routes.post('/demandas', canAccess('1'), DemandaController.create);

routes.get('/produtos', canAccess('1'), ProdutoController.index);

module.exports = routes;