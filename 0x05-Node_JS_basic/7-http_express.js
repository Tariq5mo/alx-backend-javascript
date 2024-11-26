const express = require('express');
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

      resolve(output.join('\n'));
    });
  });
}

const app = express();
const host = '127.0.0.1';
const port = 1245;

app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.statusCode = 200;
  res.send('Hello Holberton School!');
  res.end();
});

app.get('/students', async (req, res) => {
  try {
    const data = await countStudents(process.argv[2]);
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(`This is the list of our students\n${data}`);
  } catch (error) {
    // Ensure headers are not sent after the response has ended
    if (!res.headersSent) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end(error.message);
    }
  }
});

app.listen(port, host);

module.exports = app;
