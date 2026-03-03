const express = require("express");
const path = require("path");
const Database = require("better-sqlite3");
const logger = require("./middleware/logger");

const app = express();
const PORT = 3000;


const db = new Database("database.sqlite");


db.prepare(`
  CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY,
    title TEXT,
    price REAL,
    category TEXT
  )
`).run();

db.prepare(`
  CREATE TABLE IF NOT EXISTS posts (
    id INTEGER PRIMARY KEY,
    userId INTEGER,
    title TEXT
  )
`).run();

db.prepare(`
  CREATE TABLE IF NOT EXISTS comments (
    id INTEGER PRIMARY KEY,
    postId INTEGER
  )
`).run();


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(logger);


app.use((req, res, next) => {
  req.db = db;
  next();
});


app.use("/sync", require("./routes/sync"));
app.use("/api", require("./routes/api"));

app.get("/", (req, res) => {
  res.redirect("/api/dashboard");
});

app.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`);
});