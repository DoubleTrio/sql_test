const fs = require("fs");
const sqlite3 = require("sqlite3").verbose();
const filepath = "./courses.db";

function createDbConnection() {
  if (fs.existsSync(filepath)) {
    return new sqlite3.Database(filepath);
  } else {
    const db = new sqlite3.Database(filepath, (error) => {
      if (error) {
        return console.error(error.message);
      }
      createCourseTable(db);
    });
    console.log("Connection with SQLite has been established");
    return db;
  }
}

function createCourseTable(db) {
  db.exec(`
  CREATE TABLE courses
  (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    name   VARCHAR(50) NOT NULL,
    course_id VARCHAR(50) NOT NULL,
    description   VARCHAR(256) NOT NULL,
    credits   INTEGER NOT NULL,
    location  VARCHAR(50) NOT NULL,
    capacity  INTEGER NOT NULL,
    year_offered VARCHAR(20) NOT NULL,
    semester_offered VARCHAR(20) NOT NULL
  );
`);
}

module.exports = createDbConnection();