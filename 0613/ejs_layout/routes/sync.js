const express = require("express");
const axios = require("axios");
const router = express.Router();

router.get("/posts", async (req, res) => {
  const db = req.db;

  try {
    const postsRes = await axios.get("https://jsonplaceholder.typicode.com/posts");
    const commentsRes = await axios.get("https://jsonplaceholder.typicode.com/comments");

    const insertPost = db.prepare(`
      INSERT OR REPLACE INTO posts (id, userId, title, body)
      VALUES (?, ?, ?, ?)
    `);

    const insertComment = db.prepare(`
      INSERT OR REPLACE INTO comments (id, postId, name, email, body)
      VALUES (?, ?, ?, ?, ?)
    `);

    postsRes.data.forEach(p => {
      insertPost.run(p.id, p.userId, p.title, p.body);
    });

    commentsRes.data.forEach(c => {
      insertComment.run(c.id, c.postId, c.name, c.email, c.body);
    });

    res.send(`
      <h2>Datos sincronizados correctamente</h2>
      <a href="/api/dashboard">Volver al Dashboard</a>
    `);

  } catch (err) {
    res.status(500).send("Error al sincronizar");
  }
});

module.exports = router;