const express = require("express");
const router = express.Router();

router.get("/dashboard", (req, res) => {
  const db = req.db;

  const rows = db.prepare("SELECT * FROM products").all();

  const totalProducts = rows.length;
  const totalValue = rows.reduce((sum, p) => sum + p.price, 0);

  const categories = rows.reduce((acc, p) => {
    acc[p.category] = (acc[p.category] || 0) + 1;
    return acc;
  }, {});

  res.render("dashboard", {
    totalProducts,
    totalValue,
    categories
  });
});

module.exports = router;