const express = require("express");
const axios = require("axios");
const router = express.Router();

router.get("/posts", async (req, res) => {
  try {
    const db = req.db;


    const postsRes = await axios.get("https://jsonplaceholder.typicode.com/posts");
    const commentsRes = await axios.get("https://jsonplaceholder.typicode.com/comments");

    const posts = postsRes.data;
    const comments = commentsRes.data;

    const insertPost = db.prepare(`
      INSERT OR REPLACE INTO posts (id, userId, title)
      VALUES (?, ?, ?)
    `);

    const insertComment = db.prepare(`
      INSERT OR REPLACE INTO comments (id, postId)
      VALUES (?, ?)
    `);

    const transaction = db.transaction(() => {
      posts.forEach(p => insertPost.run(p.id, p.userId, p.title));
      comments.forEach(c => insertComment.run(c.id, c.postId));
    });

    transaction();

    res.send("Posts y comentarios sincronizados correctamente");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al sincronizar posts");
  }
});

module.exports = router;