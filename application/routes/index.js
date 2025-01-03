const home = require("./home");
const noticias = require("./noticias");
const admin = require("./admin");

module.exports = (app) => {
  home(app);
  noticias(app);
  admin(app);
};
