const fs = require("fs");
const sqlite3 = require("sqlite3").verbose();
const filepath = "./students.db";

function createDbConnection() {
  if (fs.existsSync(filepath)) {
    return new sqlite3.Database(filepath);
  } else {
    const db = new sqlite3.Database(filepath, (error) => {
      if (error) {
        return console.error(error.message);
      }
      createStudentTable(db);
    });
    console.log("Connection with SQLite has been established");
    return db;
  }
}

function createStudentTable(db) {
  db.exec(`
  CREATE TABLE students
  (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    first_name   VARCHAR(50) NOT NULL,
    last_name   VARCHAR(50) NOT NULL,
    email   VARCHAR(50) NOT NULL,
    password  VARCHAR(50) NOT NULL,
    headshot  VARCHAR(100) NOT NULL,
    gpa REAL DEFAULT '4.0' NOT NULL,
    grad_year INTEGER NOT NULL,
    grad_semester VARCHAR(20) NOT NULL
  );
`);
}

createDbConnection()
module.exports = createDbConnection();