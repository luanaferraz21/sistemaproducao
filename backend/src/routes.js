const express = require('express');

const OperadorController = require('./controllers/OperadorController');

const routes = express.Router();

routes.get('/operador', OperadorController.index);
routes.post('/operador', OperadorController.create);

module.exports = routes;