const express = require("express");
const path = require("path");
const routes = require("../application/routes");

// Inicialização do app
const app = express();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../application/views"));

// Middleware
app.use(express.static(path.join(__dirname, "../application/public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Conexão com o banco de dados
const dbConnection = require("./dbConnection");
app.config = { dbConnection };

// Carregando modelos manualmente
const NoticiasDAO = require("../application/models/NoticiasDAO");
app.models = { NoticiasDAO }; // Adiciona `NoticiasDAO` ao app.models

// Carregando rotas
routes(app);

module.exports = app;
