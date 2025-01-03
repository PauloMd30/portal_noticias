class NoticiasDAO {
  constructor(connection) {
    this._connection = connection;
  }

  async getNoticias() {
    const [rows] = await this._connection.query(
      "SELECT * FROM noticias ORDER BY data_criacao DESC"
    );
    return rows;
  }

  async getNoticia(id_noticia) {
    const [rows] = await this._connection.query(
      "SELECT * FROM noticias WHERE id_noticia = ?",
      [id_noticia.id_noticia]
    );
    return rows[0];
  }

  async salvarNoticia(noticia) {
    const [result] = await this._connection.query(
      "INSERT INTO noticias SET ?",
      noticia
    );
    return result;
  }

  async get5ultimasnoticias() {
    const [rows] = await this._connection.query(
      "SELECT * FROM noticias ORDER BY data_criacao DESC LIMIT 5"
    );
    return rows;
  }
}

module.exports = NoticiasDAO;
