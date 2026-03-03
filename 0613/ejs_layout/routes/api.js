const express = require("express");
const router = express.Router();

router.get("/dashboard", (req, res) => {
  const db = req.db;

  const posts = db.prepare("SELECT * FROM posts").all() || [];
  const comments = db.prepare("SELECT * FROM comments").all() || [];


  const postCountByUser = {};
  posts.forEach(p => {
    postCountByUser[p.userId] = (postCountByUser[p.userId] || 0) + 1;
  });


  const counts = Object.values(postCountByUser).sort((a, b) => a - b);
  let medianPostsPerUser = 0;

  if (counts.length > 0) {
    const mid = Math.floor(counts.length / 2);
    if (counts.length % 2 === 0) {
      medianPostsPerUser = ((counts[mid - 1] + counts[mid]) / 2).toFixed(2);
    } else {
      medianPostsPerUser = counts[mid];
    }
  }


  const topContributors = Object.entries(postCountByUser)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);

  res.render("dashboard", {
    topContributors,
    medianPostsPerUser
  });
});

module.exports = router;