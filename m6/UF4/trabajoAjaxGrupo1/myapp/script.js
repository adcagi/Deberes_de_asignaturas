import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'supermercado',
  password: 'admin',
  port: 5432,
});


const getLen = async () =>{
  try{
    const result = await pool.query('SELECT * FROM productos');
    console.log(result.rows)
  }catch (e){
    console.error(e)
  }
}


getLen();