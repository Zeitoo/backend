const pool = require("../config/config_db.js")

/*
const data = {
	titulo: "junior",
	name: "Jose Joao Zimbico",
	price: "211",
	description: "erdghjkg",
	thumb: "bvvvvvvvvvvv",
	video: "cfgrgrergrhegheghh",
	code: "2134",
};
*/
const getTodosPosts = async () => {
	const [rows] = await pool.query(" SELECT * FROM posts");
	return rows;
};

const putPost = async (data) => {
	const [rows] = await pool.query(
		"INSERT INTO posts VALUES (0,?,?,?,?,?,?,?)",
		[
			0,
			data.titulo,
			data.name,
			data.description,
			data.video,
			data.thumb,
			data.price,
		]
	);
	return rows;
};

module.exports = { getTodosPosts, putPost};
/*
const getVideoPorId = async (id) => {
  const [rows] = await pool.query('SELECT * FROM videos WHERE id = ?', [id]);
  return rows[0];
};
*/
