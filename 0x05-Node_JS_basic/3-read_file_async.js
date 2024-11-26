const { readFile } = require('fs');

async function countStudents(path) {
  return new Promise((resolve, reject) => {
    readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const records = data.split('\n').filter((record) => record.trim() !== '');
      const students = records.map((record) => record.split(','));

      const studentsObject = students.map(([firstName, lastName, age, field]) => {
        const studentObject = {};
        studentObject.firstName = firstName;
        studentObject.lastName = lastName;
        studentObject.age = age;
        studentObject.field = field;
        return studentObject;
      });
      /* remove the headers */
      studentsObject.shift();

      const fieldMap = {};
      studentsObject.forEach((student) => {
        if (!fieldMap[student.field]) {
          fieldMap[student.field] = [];
        }
        fieldMap[student.field].push(student.firstName);
      });

      const output = [];
      output.push(`Number of students: ${studentsObject.length}`);
      for (const field of Object.keys(fieldMap)) {
        output.push(`Number of students in ${field}: ${fieldMap[field].length}. List: ${fieldMap[field].join(', ')}`);
      }

      console.log(output.join('\n'));
      resolve();
    });
  });
}

module.exports = countStudents;
