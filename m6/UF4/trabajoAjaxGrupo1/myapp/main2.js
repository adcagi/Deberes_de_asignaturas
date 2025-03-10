import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'supermercado',
  password: 'admin',
  port: 5432,
});

export default pool;
import express from "express";
import pool from "./pool.js"; // Importa la conexión a PostgreSQL

const app = express();
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Prueba en http://localhost:${PORT}/productos`);
  });

  app.get("/:tabla/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const tabla = req.params.tabla;
      const result = await pool.query(`SELECT * FROM ${tabla} WHERE id = ${id}`);
      res.json(result.rows);
    } catch (e) {
      console.error(e);
      res.status(500).json({ error: "Error al obtener productos" });
    }
  });
  app.get("/:tabla", async (req, res) => {
    try {
      const tabla = req.params.tabla;
      const result = await pool.query(`SELECT * FROM ${tabla}`);
      res.json(result.rows);
    } catch (e) {
      console.error(e);
      res.status(500).json({ error: "Error al obtener productos" });
    }
  });

  app.delete(`/:tabla/:id`, async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const tabla = req.params.tabla;
      await pool.query(
        `DELETE FROM ${tabla} WHERE id = ${id}`
      );
      const result = await pool.query("SELECT * FROM productos");
      res.json(result.rows);
    } catch (e) {
      console.error(e);
    }
  });

  app.post(`/productos/`, async (req, res) => {
    try {
      await pool.query(`
        INSERT INTO productos
        (id_proveedor,codigo, imagen, nombre, marca, tipo, grupo, peso, precio_unidad, stock) VALUES
        (1,'BET78U9', 'https://http2.mlstatic.com/D_NQ_NP_792586-MLA47682120282_092021-O.webp' ,  
        'Agua de Mesa sin Gas Nestle Bidon 6.3L', 'Nestle' ,'Bebidas', 'Agua' , 
        6.3 , 195.60 , 500 );`
      );
        const result = await pool.query("SELECT * FROM productos");
        res.json(result.rows);
      res.json({ message: "Registro Borrado Correctamente" });
    } catch (e) {
      console.error(e);
      res.status(500).json({ error: "Error al insertar producto" });
    }
  });

  app.put(`/clientes`, async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      await pool.query(`update clientes set apellido = 'Aguilera' where ((nombre='Sofia')and(nro_doc='3494758583'));`);
      const result = await pool.query("SELECT * FROM clientes");
      res.json(result.rows);
    } catch (e) {
      console.error(e);
      res.status(500).json({ error: "Error al actualizar cliente" });
    }
  });

  