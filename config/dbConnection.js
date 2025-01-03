// Importa o módulo mysql2/promise para usar o MySQL com suporte a Promises
const mysql = require("mysql2/promise");

// Carrega as variáveis de ambiente do arquivo .env
require("dotenv").config();

module.exports = async function () {
  try {
    // Cria um pool de conexões com o banco de dados MySQL usando as variáveis de ambiente
    const connection = mysql.createPool({
      host: process.env.MYSQL_HOST, // Endereço do servidor MySQL
      user: process.env.MYSQL_USER, // Nome de usuário do MySQL
      password: process.env.MYSQL_PASSWORD, // Senha do MySQL
      database: process.env.MYSQL_DB, // Nome do banco de dados
    });
    return connection;
  } catch (erro) {
    console.error("Erro ao estabelecer conexão com o banco de dados:", erro);
    throw erro;
  }
};
