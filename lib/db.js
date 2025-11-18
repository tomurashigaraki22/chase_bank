// c:\Users\emman\OneDrive\Desktop\chase_bank\lib\db.js
import Database from "better-sqlite3";

const dbFile = process.env.DB_PATH || (process.env.NODE_ENV === "production" ? "/tmp/db.sqlite" : "db.sqlite");
const db = globalThis.__db || new Database(dbFile);
if (!globalThis.__db) {
  db.exec("PRAGMA journal_mode = WAL;");
  db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY,
      email TEXT UNIQUE NOT NULL,
      password_hash TEXT NOT NULL,
      first_name TEXT,
      last_name TEXT,
      created_at TEXT DEFAULT CURRENT_TIMESTAMP
    );
  `);
  db.exec(`
    CREATE TABLE IF NOT EXISTS accounts (
      id INTEGER PRIMARY KEY,
      user_id INTEGER NOT NULL,
      type TEXT NOT NULL,
      number TEXT UNIQUE NOT NULL,
      balance REAL NOT NULL DEFAULT 0,
      status TEXT NOT NULL DEFAULT 'active',
      FOREIGN KEY(user_id) REFERENCES users(id)
    );
  `);
  db.exec(`
    CREATE TABLE IF NOT EXISTS transactions (
      id INTEGER PRIMARY KEY,
      user_id INTEGER NOT NULL,
      account_id INTEGER NOT NULL,
      type TEXT NOT NULL,
      amount REAL NOT NULL,
      description TEXT,
      created_at TEXT DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY(user_id) REFERENCES users(id),
      FOREIGN KEY(account_id) REFERENCES accounts(id)
    );
  `);
  globalThis.__db = db;
}
export default db;