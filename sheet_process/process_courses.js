const xlsx = require('node-xlsx')

const workSheetsFromFile = xlsx.parse(`sheet_process/class.xlsx`);


const exampleRow = workSheetsFromFile[0].data

const rowData = parseCourseRow(exampleRow[7])


console.log(rowData)

/*
[
  <6 empty items>,
  'DANC-100-A',
  'Intro to Dance',
  4,
  'Osayande, Jeannine',
  'T Th',
  '10:00 AM',
  '11:15 AM',
  'HEL DANC',
  <2 empty items>,
  20
]
*/
function parseCourseSection(courseSection) {
  let sectionParts = courseSection.split('-')
  let id = sectionParts[0]
  let level = sectionParts[1]
  let section = sectionParts[2]
  return {
    id,
    level,
    section
  }
}

function parseInstructorName() {

}

function parseCourseRow(row) {
  let courseSection = parseCourseSection(row[6]);
  let name = row[7]
  let capacity = row[8]
  let days = row[9]
  let startingTime = row[10]
  let endingTime = row[11]
  return {
    ...courseSection,
    name,
    capacity,
    days,
    startingTime,
    endingTime,
  }
}