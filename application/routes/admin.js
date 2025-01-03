module.exports = (app) => {
  const adminController = require("../controllers/admin");

  app.get("/formulario_incluir_noticia", (req, res) =>
    adminController.formulario_incluir_noticia(app, req, res)
  );
  app.post("/noticias/salvar", (req, res) =>
    adminController.noticias_salvar(app, req, res)
  );
};
