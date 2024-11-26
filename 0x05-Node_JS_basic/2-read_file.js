const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const records = data.split('\n');

    // Remove the last elements of the array if they are empty
    for (let i = records.length - 1; i > 0; i -= 1) {
      if (records[i] === '') {
        records.pop();
      }
    }

    const students = records.map((record) => record.split(','));

    const studentsObject = students.map(([firstName, lastName, age, field]) => {
      const studentObject = {};
      studentObject.firstNames = firstName;
      studentObject.lastName = lastName;
      studentObject.age = age;
      studentObject.field = field;
      return studentObject;
    });

    studentsObject.shift();
    const fieldMap = {};
    studentsObject.forEach((student) => {
      if (!fieldMap[student.field]) {
        fieldMap[student.field] = [];
      }
      fieldMap[student.field].push(student.firstNames);
    });
    const output = [];
    output.push(`Number of students: ${studentsObject.length}`);
    for (const field of Object.keys(fieldMap)) {
      output.push(`Number of students in ${field}: ${fieldMap[field].length}. List: ${fieldMap[field].join(', ')}`);
    }
    console.log(output.join('\n'));
  } catch (err) {
    console.error('Cannot load the database');
  }
}

module.exports = countStudents;
