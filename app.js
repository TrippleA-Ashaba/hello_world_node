const express = require("express");
const app = express();

// Configurations

// Middleware

// Simple request time logger
app.use((req, res, next) => {
	let d = Date(Date.now());
	console.log("A new request received at " + d.toString());
	next();
});

app.use(express.urlencoded({ extended: false }));

// Routes

//put request
app.put("/about", (req, res) => {
	res.send("You have changed me");
});

// post request
app.post("/register", (req, res) => {
	res.send("You have registered a user");
});

// delete request
app.delete("/about", (req, res) => {
	res.send("You have deleted something");
});

app.get("/", (req, res) => {
	res.send("Homepage! Hello World.");
});

app.get("/about", (req, res) => {
	res.send("About page. Nice.");
});

app.get("/hobbies", (req, res) => {
	res.send(
		"<h1>My Hobbies</h1><ul><li>Wine</li><li>Movies</li><li>Ps4/Xbox</li><li>Music</li></ul><details>Something in here</details>"
	);
	// console.log("hobbies requested");
});

app.get("*", (req, res) => {
	res.send("<h1 style='text-align:center;font-size:30px;'>404! <br>🤣😂🤣</h1>");
});
app.listen(3000, () => console.log("Listening on port 3000"));
