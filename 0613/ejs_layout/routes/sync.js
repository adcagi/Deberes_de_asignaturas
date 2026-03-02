const express = require("express");
const axios = require("axios");
const router = express.Router();

router.get("/products", async (req, res) => {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    const products = response.data;
    const db = req.db;

    const insert = db.prepare(`
      INSERT OR REPLACE INTO products (id, title, price, category)
      VALUES (?, ?, ?, ?)
    `);

    const transaction = db.transaction((products) => {
      for (const product of products) {
        insert.run(product.id, product.title, product.price, product.category);
      }
    });

    transaction(products);

    res.send("Productos sincronizados correctamente");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al sincronizar");
  }
});

module.exports = router;