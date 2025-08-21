const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./holidays.db');

// Create table if not exists
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS holidays (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      date TEXT NOT NULL,
      name TEXT NOT NULL
    )
  `);
});

module.exports = db;