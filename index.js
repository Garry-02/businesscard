const express = require("express");
const PORT = process.env.PORT || 8008;
const app = express();

const fs = require("fs").promises

// Don't worry about these 4 lines below
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("createcard");
});
app.get("/people/:id", (req, res) => {
  res.render("people");
});

app.get("/:id/photos", (req, res) => {
  const id = req.params.id;
});

app.post("/createcard"), (req, res) => {
  console.log("hi");
 let  data = req.body;
  let profile = {
    
  }
  fs.readFile("database.json", "utf-8").then(c => {
    JSON.parse(c).users.push(data);
  })
  database.users.push(profile);
}

app.listen(PORT, () => {
  console.log(`Server now is running at http://localhost:${PORT} 🚀`);
});
