module.exports = (app) => {
  app.get("/", async (req, res) => {
    try {
      const homeController = require("../controllers/home");
      await homeController.index(app, req, res);
    } catch (erro) {
      console.error("Erro ao processar a requisição:", erro);
      res.status(500).send("Erro ao processar a requisição");
    }
  });
};
