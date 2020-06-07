const express = require('express');

const OperadorController = require('./controllers/OperadorController');
const DemandaController = require('./controllers/DemandaController');
const ProdutoController = require('./controllers/ProdutoController');

const routes = express.Router();

routes.get('/operador', OperadorController.index);
routes.post('/operador', OperadorController.create);

routes.get('/demandas', DemandaController.index);
routes.post('/demandas', DemandaController.create);

routes.get('/produtos', ProdutoController.index);

module.exports = routes;