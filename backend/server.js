import express from "express";

const app = express();

app.listen(process.env.PORT || 5000, () => {
	console.log("Server at http://localhost:5000");
});
