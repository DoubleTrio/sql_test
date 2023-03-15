const db = require("./core_reqs_db");

const CORE_REQS = [
  {
    abbreviation: "CIE",
    name: "Common Intellectual Experience",
  },
  {
    abbreviation: "R",
    name: "Deductive reasoning",
  },
  {
    abbreviation: "Q",
    name: "Quantitative reasoning",
  },
  {
    abbreviation: "S",
    name: "Scientific inquiry/experimentation",
  },
  {
    abbreviation: "SS",
    name: "Social scientific inquiry",
  },
  {
    abbreviation: "L",
    name: "Language",
  },
  {
    abbreviation: "CCAP",
    name: "Core Capstone",
  },
  {
    abbreviation: "XLP",
    name: "Experiential learning project",
  },
  {
    abbreviation: "D",
    name: "Diversity and inequality",
  },
  {
    abbreviation: "GN",
    name: "Global interconnections",
  },
  {
    abbreviation: "A",
    name: "Artistic/performative",
  },
  {
    abbreviation: "H",
    name: "Humanistic inquiry",
  },
]

function insertCoreReq() {
  for (let core of CORE_REQS) {
    let { abbreviation, name } = core
    console.log(abbreviation, name, "HERE")

    db.run(
      `INSERT INTO core_reqs (abbreviation, name) VALUES (?, ?)`,
      [abbreviation, name],
      function (error) {
        if (error) {
          console.error(error.message);
        }
        console.log(`Inserted a row with the ID: ${this.lastID} - ${abbreviation}`);
      }
    );
  }
}

insertCoreReq()

function selectRows() {
  db.each(`SELECT * FROM core_reqs`, (error, row) => {
    if (error) {
      throw new Error(error.message);
    }
    console.log(row);
  });
}

selectRows();