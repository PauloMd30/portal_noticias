const app = require("./config/server");

// Carrega as variáveis de ambiente do arquivo .env
require("dotenv").config();

// Define a porta do servidor, usando a variável de ambiente PORT ou 3000 como padrão
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor está on na porta ${PORT}!`);
});
