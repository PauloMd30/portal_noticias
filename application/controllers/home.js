module.exports.index = async (app, req, res) => {
  try {
    const connection = await app.config.dbConnection();
    const NoticiasDAO = new (require("../models/NoticiasDAO"))(connection);
    const noticias = await NoticiasDAO.get5ultimasnoticias();
    res.render("home/index", { noticias });
  } catch (erro) {
    console.error("Erro ao buscar notícias:", erro);
    res.status(500).send("Erro ao buscar notícias");
  }
};
