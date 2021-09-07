import { connect } from "./db.js"

async function insertClient(client){
  const conn = await connect();

  try {
    const sql = "INSERT INTO clients (name, cpf, phone, email, address) VALUES ($1, $2, $3, $4, $5) RETURNING *";
    const values = [client.name, client.cpf, client.phone, client.email, client.address];
    const res = await conn.query(sql, values);
    return res.rows[0];
  } catch (err) {
    throw err;
  } finally {
    conn.release();
  }
}

export default {
  insertClient  
}