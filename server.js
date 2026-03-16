const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is running");
});


app.post("/login", (req, res) => {
  const { email, password } = req.body;
 
  if (email && password) {
    res.json({ success: true, message: "Login successful" });
  } else {
    res.status(400).json({ success: false, message: "Invalid credentials" });
  }
});

app.post("/signup", (req, res) => {
  const { name, email, phone, password } = req.body;

  if (name && email && phone && password) {
    res.json({ success: true, message: "Signup successful" });
  } else {
    res.status(400).json({ success: false, message: "Missing fields" });
  }
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});