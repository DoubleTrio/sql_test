const db = require("./courses_db");

function selectRows() {
  db.each(`SELECT * FROM courses`, (error, row) => {
    if (error) {
      throw new Error(error.message);
    }
    console.log(row);
  });
}

selectRows();