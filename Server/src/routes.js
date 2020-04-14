// (/) é a rota padrão, rota raiz
/** 
 * Rotas / Recursos
 * localhost:3000/users 
 */

/**
 * Métodos HTTP:
 * 
 * GET: Buscar uma informação do backend.
 * POST: Criar uma informação no backend.
 * PUT: Atualizar ou alterar uma informação no backend.
 * DELETE: Deletar uma informação no backend
 */

 /**
  * Tipos de paramêtros:
  * 
  * Query Params: Paramêtros nomeados enviados na rota após "?",
  * servindo para filtros, paginação.
  * 
  * Route Params: Paramêtros usados para identificar recursos
  * 
  * Request Body: Corpo da requisição utilizada para criar ou alterar recursos.
  */

const express = require("express");

const routes = express.Router();

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

routes.post('/session', SessionController.create);

routes.post('/ongs', OngController.create);
routes.get('/ongs', OngController.index);

routes.post('/incidents', IncidentController.create);
routes.get('/incidents', IncidentController.index);
routes.delete('/incidents/:id', IncidentController.delete);

routes.get('/profile', ProfileController.index);

module.exports = routes;