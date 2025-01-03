module.exports.noticias = async (app, req, res) => {
  try {
    const connection = await app.config.dbConnection();
    const NoticiasDAO = new (require("../models/NoticiasDAO"))(connection);
    const noticias = await NoticiasDAO.getNoticias();
    res.render("noticias/noticias", { noticias });
  } catch (erro) {
    console.error("Erro ao buscar notícias:", erro);
    res.status(500).send("Erro ao buscar notícias");
  }
};

module.exports.noticia = async (app, req, res) => {
  try {
    const connection = await app.config.dbConnection();
    const NoticiasDAO = new app.models.NoticiasDAO(connection);

    // Pegando o ID da notícia da query string
    const id_noticia = req.query;

    if (!id_noticia || !id_noticia.id_noticia) {
      return res.status(400).send("ID da notícia não fornecido.");
    }

    const result = await NoticiasDAO.getNoticia(id_noticia);

    if (result) {
      res.render("noticias/noticia", { noticia: [result] }); // Passa como array para manter a consistência
    } else {
      res.render("noticias/noticia", { noticia: [] });
    }
  } catch (erro) {
    console.error("Erro ao buscar notícia:", erro);
    res.status(500).send("Erro ao buscar notícia");
  }
};
