# 0x05. NodeJS Basics

## Overview

This project is part of the ALX Software Engineering Program. It's designed to help me understand and implement basic NodeJS concepts. By the end of this project, I should be able to explain various NodeJS topics without needing to look them up.

## Learning Objectives

By completing this project, I aim to understand:

- How to run JavaScript using NodeJS
- How to use NodeJS modules
- How to use specific NodeJS modules to read files
- How to use `process` to access command line arguments and the environment
- How to create a small HTTP server using NodeJS
- How to create a small HTTP server using ExpressJS
- How to create advanced routes with ExpressJS
- How to use ES6 with NodeJS using Babel-node
- How to use Nodemon to develop faster

## Requirements

- Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`
- All files will be interpreted/compiled on Ubuntu 18.04 LTS using node (version 12.x.x)
- All files should end with a new line
- A `README.md` file is mandatory
- Code should use the `js` extension
- Code will be tested using Jest and the command `npm run test`
- Code will be verified against lint using ESLint
- Code needs to pass all the tests and lint. You can verify the entire project running `npm run full-test`
- All functions/classes must be exported by using this format: `module.exports = myFunction`

## Provided Files

### `database.csv`

```csv
firstname,lastname,age,field
Johann,Kerbrou,30,CS
Guillaume,Salou,30,SWE
Arielle,Salou,20,CS
Jonathan,Benou,30,CS
Emmanuel,Turlou,40,CS
Guillaume,Plessous,35,CS
Joseph,Crisou,34,SWE
Paul,Schneider,60,SWE
Tommy,Schoul,32,SWE
Katie,Shirou,21,CS
```

### `package.json`

```json
{
  "name": "0x05-nodejs_basics",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "jest",
    "full-test": "npm run lint && npm run test"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "babel-jest": "^24.9.0",
    "jest": "^24.9.0",
    "nodemon": "^2.0.2",
    "eslint": "^6.8.0",
    "eslint-config-airbnb-base": "^14.0.0",
    "eslint-plugin-import": "^2.20.1",
    "eslint-config-prettier": "^6.10.0",
    "eslint-plugin-prettier": "^3.1.2",
    "prettier": "^1.19.1"
  }
}
```

### `babel.config.js`

```js
module.exports = {
  presets: [["@babel/preset-env", { targets: { node: "current" } }]]
};
```

### `.eslintrc.js`

```js
module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true
  },
  extends: [
    "airbnb-base",
    "prettier"
  ],
  plugins: [
    "prettier"
  ],
  rules: {
    "prettier/prettier": "error",
    "no-console": "off",
    "no-shadow": "off",
    "func-names": "off",
    "no-process-env": "off",
    "no-param-reassign": "off",
    "no-underscore-dangle": "off"
  }
};
```

### Setup

- Don’t forget to run `$ npm install` when you have the `package.json`.

Sure thing, Tariq! Here's the comprehensive list of tasks for your **0x05. NodeJS Basics** project, including the additional task you mentioned:

### 0. Executing basic javascript with Node JS

In the file `0-console.js`, create a function named `displayMessage` that prints in STDOUT the string argument.

Example:

```js
const displayMessage = require('./0-console');

displayMessage("Hello NodeJS!");
```

### 1. Using Process stdin

Create a program named `1-stdin.js` that will be executed through command line:

- It should display the message `Welcome to Holberton School, what is your name?` (followed by a new line)
- The user should be able to input their name on a new line
- The program should display `Your name is: INPUT`
- When the user ends the program, it should display `This important software is now closing` (followed by a new line)

Example:

```bash
$ node 1-stdin.js
Welcome to Holberton School, what is your name?
Bob
Your name is: Bob
$
$ echo "John" | node 1-stdin.js
Welcome to Holberton School, what is your name?
Your name is: John
This important software is now closing
$
```

### 2. Reading a file synchronously with Node JS

Using the database `database.csv`, create a function `countStudents` in the file `2-read_file.js`.

- The function `countStudents` should accept a path in argument.
- The script should attempt to read the database file synchronously.
- If the database is not available, it should throw an error with the text `Cannot load the database`.
- If the database is available, it should log the following message to the console `Number of students: NUMBER_OF_STUDENTS`.
- It should log the number of students in each field, and the list with the following format: `Number of students in FIELD: 6. List: LIST_OF_FIRSTNAMES`.
- CSV file can contain empty lines (at the end) - and they are not a valid student!

Example:

```js
const countStudents = require('./2-read_file');

countStudents("nope.csv");
// Error: Cannot load the database

countStudents("database.csv");
// Number of students: 10
// Number of students in CS: 6. List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie
// Number of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy
```

### 3. Reading a file asynchronously with Node JS

Using the database `database.csv`, create a function `countStudents` in the file `3-read_file_async.js`.

- The function `countStudents` should accept a path in argument.
- The script should attempt to read the database file asynchronously.
- The function should return a Promise.
- If the database is not available, it should throw an error with the text `Cannot load the database`.
- If the database is available, it should log the following message to the console `Number of students: NUMBER_OF_STUDENTS`.
- It should log the number of students in each field, and the list with the following format: `Number of students in FIELD: 6. List: LIST_OF_FIRSTNAMES`.
- CSV file can contain empty lines (at the end) - and they are not a valid student!

Example:

```js
const countStudents = require('./3-read_file_async');

countStudents("nope.csv")
    .then(() => {
        console.log("Done!");
    })
    .catch((error) => {
        console.log(error);
    });
// Error: Cannot load the database

countStudents("database.csv")
    .then(() => {
        console.log("Done!");
    })
    .catch((error) => {
        console.log(error);
    });
console.log("After!");
// After!
// Number of students: 10
// Number of students in CS: 6. List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie
// Number of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy
// Done!
```

### 4. Create a small HTTP server using Node's HTTP module

In a file named `4-http.js`, create a small HTTP server using the `http` module:

- It should be assigned to the variable `app` and this one must be exported.
- HTTP server should listen on port 1245.
- Displays `Hello Holberton School!` in the page body for any endpoint as plain text.

Example:

```bash
$ node 4-http.js
...

$ curl localhost:1245 && echo ""
Hello Holberton School!
$
$ curl localhost:1245/any_endpoint && echo ""
Hello Holberton School!
$
```

### 5. Create a more complex HTTP server using Node's HTTP module

In a file named `5-http.js`, create a small HTTP server using the `http` module:

- It should be assigned to the variable `app` and this one must be exported.
- HTTP server should listen on port 1245.
- It should return plain text.
- When the URL path is `/`, it should display `Hello Holberton School!` in the page body.
- When the URL path is `/students`, it should display `This is the list of our students` followed by the same content as the file `3-read_file_async.js` (with and without the database) - the name of the database must be passed as an argument of the file.
- CSV file can contain empty lines (at the end) - and they are not a valid student!

Example:

```bash
$ node 5-http.js database.csv
...

$ curl localhost:1245 && echo ""
Hello Holberton School!
$
$ curl localhost:1245/students && echo ""
This is the list of our students
Number of students: 10
Number of students in CS: 6. List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie
Number of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy
$
```

### 6. Create a small HTTP server using Express

Install Express and in a file named `6-http_express.js`, create a small HTTP server using the Express module:

- It should be assigned to the variable `app` and this one must be exported.
- HTTP server should listen on port 1245.
- Displays `Hello Holberton School!` in the page body for the endpoint `/`.

Example:

```bash
$ node 6-http_express.js
...

$ curl localhost:1245 && echo ""
Hello Holberton School!
$
$ curl localhost:1245/any_endpoint && echo ""
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Error</title>
</head>
<body>
<pre>Cannot GET /lskdlskd</pre>
</body>
</html>
$
```

### 7. Create a more complex HTTP server using Express

In a file named `7-http_express.js`, recreate the small HTTP server using Express:

- It should be assigned to the variable `app` and this one must be exported.
- HTTP server should listen on port 1245.
- It should return plain text.
- When the URL path is `/`, it should display `Hello Holberton School!` in the page body.
- When the URL path is `/students`, it should display `This is the list of our students` followed by the same content as the file `3-read_file_async.js` (with and without the database) - the name of the database must be passed as an argument of the file.
- CSV file can contain empty lines (at the end) - and they are not a valid student!

Example:

```bash
$ node 7-http_express.js database.csv
...

$ curl localhost:1245 && echo ""
Hello Holberton School!
$
$ curl localhost:1245/students && echo ""
This is the list of our students
Number of students: 10
Number of students in CS: 6. List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie
Number of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy
$
```

### 8. Organize a complex HTTP server using Express

Let's create a full server in a directory named `full_server`.

#### 8.1 Organize the structure of the server

Create 2 directories within:

- `controllers`
- `routes`

Create a file `full_server/utils.js`, in the file create a function named `readDatabase` that accepts a file path as argument:

- It should read the database asynchronously
- It should return a promise
- When the file is not accessible, it should reject the promise with the error
- When the file can be read, it should return an object of arrays of the firstname of students per field

#### 8.2 Write the App controller

Inside the file `full_server/controllers/AppController.js`:

- Create a class named `AppController`. Add a static method named `getHomepage`.
- The method accepts request and response as argument. It returns a 200 status and the message `Hello Holberton School!`.

#### 8.3 Write the Students controller

Inside the file `full_server/controllers/StudentsController.js`, create a class named `StudentsController`. Add two static methods:

The first one is `getAllStudents`:

- The method accepts request and response as argument
- It should return a status 200
- It calls the function `readDatabase` from the utils file, and displays in the page:
  - First line: `This is the list of our
