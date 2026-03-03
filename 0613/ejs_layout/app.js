const express = require("express");
const path = require("path");
const Database = require("better-sqlite3");

const app = express();
const db = new Database("database.db");

db.exec(`
CREATE TABLE IF NOT EXISTS posts (
  id INTEGER PRIMARY KEY,
  userId INTEGER,
  title TEXT,
  body TEXT
);

CREATE TABLE IF NOT EXISTS comments (
  id INTEGER PRIMARY KEY,
  postId INTEGER,
  name TEXT,
  email TEXT,
  body TEXT
);
`);


app.use(express.static(path.join(__dirname, "public")));
app.use((req, res, next) => {
  req.db = db;
  next();
});

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


app.use("/sync", require("./routes/sync"));
app.use("/api", require("./routes/api"));


app.get("/", (req, res) => {
  res.redirect("/api/dashboard");
});

app.listen(3000, () => {
  console.log("Servidor en http://localhost:3000");
});