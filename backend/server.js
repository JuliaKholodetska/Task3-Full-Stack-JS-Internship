import express from "express";

const app = express();

app.listen(5000, () => {
	console.log("Server at http://localhost:5000");
});
