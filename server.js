const express = require("express");
const app = express();
const cors = require("cors");

const port = 3000;

console.log("server starting...");

app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
	
});

app.post("/new_video", (req, res) => {
    const data = req.body;
    console.log("Received data:", data);
    res.status(200).send("Data received successfully");
});

setTimeout(() => {
	console.log("Server is shutting down...");
	process.exit(0);
}, 30000);
