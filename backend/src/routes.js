const express = require('express');

const OperadorController = require('./controllers/OperadorController');
const DemandaController = require('./controllers/DemandaController');
const ProdutoController = require('./controllers/ProdutoController');
const EquipamentoController = require('./controllers/EquipamentoController');

const routes = express.Router();
routes.post('/operador', OperadorController.create);

routes.get('/demandas', DemandaController.index);
routes.post('/demandas', DemandaController.create);

routes.get('/produtos', ProdutoController.index);
routes.get('/equipamentos', EquipamentoController.index);
routes.get('/operadores', OperadorController.index);

routes.post('/relatorio/equipamentos', EquipamentoController.search);

module.exports = routes;