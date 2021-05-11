import express from "express";

const app = express();
app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname + "/client/build/index.html"));
});
app.listen(process.env.PORT || 5000, () => {
	console.log("Server at http://localhost:5000");
});
