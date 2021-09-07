import pg from "pg";

async function connect() {
  if(global.connection) {
    return global.connection.connect();
  }

  const pool = new pg.Pool({
    connectionString: "postgres://xygbrgqf:xp6LJ63at6R5_iAVD31v6hY9g_kmFDKs@chunee.db.elephantsql.com/xygbrgqf"
  });
  global.connection = pool;

  return pool.connect();
}

export {
  connect
}