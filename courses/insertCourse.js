const db = require("./courses_db");

const mockCourses = [
  {
    name: "OO Programming",
    course_id: "CS-174-A",
    description: "CS-174. Object-Oriented Programming A continuation of CS-173. More detailed exploration of classes and instances, and an introduction to collection classes such as vectors, lists, maps and sets. Larger programs and/or team projects. Prerequisite: A grade of C- or higher in CS-173. Offered every semester. Three hours of lecture and one hour of lab per week. Four semester hours",
    credits: 4,
    location: "Pfhaler 208",
    capacity: 25,
    year_offered: "EVERY",
    semester_offered: "EVERY",
  }
]

function insertCourse() {
  let course = mockCourses[0]
  let { name, course_id, description, credits, location, capacity, year_offered, semester_offered } = course
  console.log(name, course_id, description)
  db.run(
    `INSERT INTO courses (name, course_id, description, credits, location, capacity, year_offered, semester_offered) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
    [name, course_id, description, credits, location, capacity, year_offered, semester_offered],
    function (error) {
      if (error) {
        console.error(error.message);
      }
      console.log(`Inserted a row with the ID: ${this.lastID}`);
    }
  );
}

//insertCourse();
module.exports = insertCourse();