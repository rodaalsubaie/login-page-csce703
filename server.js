const express = require("express");
const app = express();

app.use(express.json());
app.use(express.static(__dirname));

app.post("/login", function(req, res) {
  const email = req.body.email || "";
  const password = req.body.password || "";

  if (email === "" || password === "") {
    return res.status(400).json({ message: "Please fill in all fields." });
  }

  if (!email.includes("@")) {
    return res.status(400).json({ message: "Email must contain @." });
  }

  if (password.length < 8) {
    return res.status(400).json({
      message: "Password must be at least 8 characters."
    });
  }

  res.json({ message: "Login information is valid." });
});

app.listen(3000, function() {
  console.log("Server running at http://localhost:3000");
});
