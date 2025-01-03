const { body, validationResult } = require("express-validator");

module.exports.formulario_incluir_noticia = (app, req, res) => {
  res.render("admin/form_add_noticia", { errors: [], noticia: {} });
};

module.exports.noticias_salvar = async (app, req, res) => {
  const validationRules = [
    body("titulo").notEmpty().withMessage("Título é obrigatório"),
    body("resumo")
      .notEmpty()
      .withMessage("Resumo é obrigatório")
      .isLength({ min: 10, max: 100 })
      .withMessage("Resumo deve conter entre 10 e 100 caracteres"),
    body("autor").notEmpty().withMessage("Autor é obrigatório"),
    body("data_noticia")
      .notEmpty()
      .withMessage("Data é obrigatório")
      .isDate({ format: "YYYY-MM-DD" })
      .withMessage("Data deve estar no formato YYYY-MM-DD"),
    body("noticia").notEmpty().withMessage("Notícia é obrigatório"),
  ];

  await Promise.all(validationRules.map((validation) => validation.run(req)));

  const errors = validationResult(req);
  const noticia = req.body;

  if (!errors.isEmpty()) {
    return res.render("admin/form_add_noticia", {
      errors: errors.array(),
      noticia,
    });
  }

  try {
    const connection = await app.config.dbConnection();
    const NoticiasDAO = new (require("../models/NoticiasDAO"))(connection);
    await NoticiasDAO.salvarNoticia(noticia);
    res.redirect("/noticias");
  } catch (error) {
    console.error("Erro ao salvar notícia:", error);
    res.status(500).send("Erro ao salvar notícia");
  }
};
