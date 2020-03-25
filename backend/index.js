const express = require("express");
const cors = require("cors");
const routes = require("./src/routes");

const app = express();

app.use(
    cors({
        //origin: frontend address
    })
);
app.use(express.json()); //Informa ao express estaremos esperando um JSON no corpo das requisições

app.use(routes);

/**
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB ...
 */

/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where(?)
 */

app.listen(3333);
