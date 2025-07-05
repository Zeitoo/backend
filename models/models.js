//models.js
const { pool } = require("../config/config_db.js");


const getTodosPosts = async () => {
	const [rows] = await pool.query(" SELECT * FROM posts");
	return rows;
};

const putPost = async (data) => {
	// Sanitização básica
	const clean = {
		titulo: String(data.titulo).trim(),
		name: String(data.name).trim(),
		description: String(data.description).trim(),
		video: String(data.video).trim(),
		thumb: String(data.thumb).trim(),
		price: Number(data.price),
		code: Number(data.code), // se precisar guardar isso
	};

	// Validação opcional
	if (!clean.titulo || !clean.name || isNaN(clean.price)) {
		throw new Error("Dados inválidos");
	}

	const [rows] = await pool.query(
		`INSERT INTO posts (id, titulo, name, description, video, thumb, price, created_at)
		 VALUES (NULL, ?, ?, ?, ?, ?, ?, CURRENT_TIMESTAMP)`,
		[
			clean.titulo,
			clean.name,
			clean.description,
			clean.video,
			clean.thumb,
			clean.price,
		]
	);
	return rows;
};


module.exports = { getTodosPosts, putPost};
