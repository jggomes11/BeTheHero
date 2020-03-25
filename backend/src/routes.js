const express = require("express");

const OngController = require("./controllers/OngController");
const IncidentController = require("./controllers/IncidentController");
const ProfileController = require("./controllers/ProfileController");
const SessionController = require("./controllers/SessionController.js");

const connection = require("./database/connection");

const routes = express.Router();

/**
 * Métodos HTTP:
 *
 * GET: Buscar/listar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

/**
 * Tipos de parâmetros:
 *
 * Query: Parâmetros nomeados enviados na rota após "?" (filtros, paginação)
 *      Ex: http://locahost:3333/users?id=1 -> req.query.id
 * Route: Parâmetros utilizados para identificar recursos
 *      Ex: http://locahost:3333/users/1 -> /users/:id -> req.params.id
 * Body: Corpo da requisição utilizado para criar ou alterar recursos
 *      Ex: {
 *            nome: João,                -> req.body.nome
 *            idade: 22                  -> req.body.idade
 *          }
 */

routes.post("/sessions", SessionController.create);

routes.get("/ongs", OngController.index);
routes.post("/ongs", OngController.create);

routes.get("/profile", ProfileController.index);

routes.get("/incidents", IncidentController.index);
routes.post("/incidents", IncidentController.create);
routes.delete("/incidents/:id", IncidentController.delete);

module.exports = routes;
