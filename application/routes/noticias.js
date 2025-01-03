module.exports = (app) => {
  const noticiasController = require("../controllers/noticias");

  app.get("/noticias", (req, res) =>
    noticiasController.noticias(app, req, res)
  );
  app.get("/noticia", (req, res) => noticiasController.noticia(app, req, res));
};
