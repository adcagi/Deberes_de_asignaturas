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
  let medianPostsPerUser = null;

  if (counts.length > 0) {
    const mid = Math.floor(counts.length / 2);
    medianPostsPerUser =
      counts.length % 2 === 0
        ? ((counts[mid - 1] + counts[mid]) / 2).toFixed(2)
        : counts[mid];
  }


  const topContributors = Object.entries(postCountByUser)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);

  const topUsers = topContributors.map(c => `User ${c[0]}`);
  const topCounts = topContributors.map(c => c[1]);


  const commentCountByPost = {};
  comments.forEach(c => {
    commentCountByPost[c.postId] = (commentCountByPost[c.postId] || 0) + 1;
  });

  const topPosts = Object.entries(commentCountByPost)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);

  const topPostTitles = topPosts.map(tp => {
    const post = posts.find(p => p.id == tp[0]);
    return post
      ? post.title.slice(0, 20) + (post.title.length > 20 ? "..." : "")
      : `Post ${tp[0]}`;
  });

  const topPostCounts = topPosts.map(tp => tp[1]);


  res.render("dashboard", {
    medianPostsPerUser,
    topUsers,
    topCounts,
    topPostTitles,
    topPostCounts
  });
});

module.exports = router;