const express = require("express");
const app = express();
const cors = require("cors");

const port = 3000;

const { getTodosPosts } = require("./models/models.js");
const { putPost } = require("./models/models.js");

console.log("server starting...");

app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
	getTodosPosts()
		.then((data) => {
			console.log("Data fetched successfully:", data);
			res.status(200).json(data);
		})
		.catch((error) => {
			console.error("Error fetching posts:", error);
		});
});

app.post("/new_video", (req, res) => {
	const data = req.body;
	console.log("Received data:", data.code);
	if (data.code === "2288") {
		putPost(data)
			.then(() => {
				console.log("Data inserted successfully");
			})
			.catch((error) => {
				console.error("Error inserting data:", error);
				return res.status(500).send("Error inserting data");
			});
	}
	res.status(200).send("Data was received ...");
});

setTimeout(() => {
	console.log("Server is shutting down...");
	process.exit(0);
}, 120000);
