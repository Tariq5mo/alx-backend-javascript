# 0x03. ES6 Data Manipulation

## Overview

This project is part of the ALX Software Engineering Program. It's designed to help me understand and implement data manipulation techniques using ES6. By the end of this project, I should be able to explain various concepts related to data manipulation without needing to look them up.

## Learning Objectives

By completing this project, I aim to understand:

- How to use `map`, `filter`, and `reduce` on arrays
- Typed arrays
- The `Set`, `Map`, and `Weak` link data structures

## Requirements

### General

- All files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x
- Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`
- All files should end with a new line
- A `README.md` file is mandatory
- Code should use the `.js` extension
- Code will be tested using Jest and the command `npm run test`
- Code will be verified against lint using ESLint
- Code needs to pass all the tests and lint. You can verify the entire project running `npm run full-test`
- All functions must be exported

## Key ES6 Data Manipulation Concepts

### `map`, `filter`, and `reduce`

These are powerful array methods introduced in ES6 to manipulate and transform data.

- **`map`**: Creates a new array populated with the results of calling a provided function on every element in the calling array.
- **`filter`**: Creates a new array with all elements that pass the test implemented by the provided function.
- **`reduce`**: Executes a reducer function (that you provide) on each element of the array, resulting in a single output value.

### Typed Arrays

Typed arrays are array-like objects that provide a mechanism for reading and writing raw binary data in memory buffers.

### `Set`, `Map`, and `Weak` Data Structures

ES6 introduced new data structures to manage collections of data more efficiently.

- **Set**: A collection of unique values.
- **Map**: A collection of key-value pairs.
- **WeakSet**: A collection of objects, where the objects are held weakly.
- **WeakMap**: A collection of key-value pairs where the keys are objects held weakly.

## Tasks

### 0. Basic list of objects

Create a function named `getListStudents` that returns an array of objects. Each object should have three attributes: `id` (Number), `firstName` (String), and `location` (String).

Example:

```javascript
import getListStudents from "./0-get_list_students.js";

console.log(getListStudents());
```

### 1. More mapping

Create a function `getListStudentIds` that returns an array of ids from a list of objects. This function takes one argument which is an array of objects.

Example:

```javascript
import getListStudentIds from "./1-get_list_student_ids.js";
import getListStudents from "./0-get_list_students.js";

console.log(getListStudentIds("hello"));
console.log(getListStudentIds(getListStudents()));
```

### 2. Filter

Create a function `getStudentsByLocation` that returns an array of objects who are located in a specific city. It should accept a list of students and a city (string) as parameters.

Example:

```javascript
import getListStudents from "./0-get_list_students.js";
import getStudentsByLocation from "./2-get_students_by_loc.js";

const students = getListStudents();

console.log(getStudentsByLocation(students, 'San Francisco'));
```

### 3. Reduce

Create a function `getStudentIdsSum` that returns the sum of all the student ids. It should accept a list of students as a parameter.

Example:

```javascript
import getListStudents from "./0-get_list_students.js";
import getStudentIdsSum from "./3-get_ids_sum.js";

const students = getListStudents();
const value = getStudentIdsSum(students);

console.log(value);
```

### 4. Combine

Create a function `updateStudentGradeByCity` that returns an array of students for a specific city with their new grade. It should accept a list of students, a city (String), and newGrades (Array of “grade” objects) as parameters.

Example:

```javascript
import getListStudents from "./0-get_list_students.js";
import updateStudentGradeByCity from "./4-update_grade_by_city.js";

console.log(updateStudentGradeByCity(getListStudents(), "San Francisco", [{ studentId: 5, grade: 97 }, { studentId: 1, grade: 86 }]));
console.log(updateStudentGradeByCity(getListStudents(), "San Francisco", [{ studentId: 5, grade: 97 }]));
```

### 5. Typed Arrays

Create a function named `createInt8TypedArray` that returns a new ArrayBuffer with an Int8 value at a specific position. It should accept three arguments: length (Number), position (Number), and value (Number).

Example:

```javascript
import createInt8TypedArray from "./5-typed_arrays.js";

console.log(createInt8TypedArray(10, 2, 89));
```

### 6. Set data structure

Create a function named `setFromArray` that returns a Set from an array. It accepts an argument (Array, of any kind of element).

Example:

```javascript
import setFromArray from "./6-set.js";

console.log(setFromArray([12, 32, 15, 78, 98, 15]));
```

### 7. More set data structure

Create a function named `hasValuesFromArray` that returns a boolean if all the elements in the array exist within the set. It accepts two arguments: a set (Set) and an array (Array).

Example:

```javascript
import hasValuesFromArray from "./7-has_array_values.js";

console.log(hasValuesFromArray(new Set([1, 2, 3, 4, 5]), [1]));
console.log(hasValuesFromArray(new Set([1, 2, 3, 4, 5]), [10]));
console.log(hasValuesFromArray(new Set([1, 2, 3, 4, 5]), [1, 10]));
```

### 8. Clean set

Create a function named `cleanSet` that returns a string of all the set values that start with a specific string (startString).

It accepts two arguments: a set (Set) and a startString (String).

When a value starts with startString, you only append the rest of the string. The string contains all the values of the set separated by `-`.

Example:

```javascript
import cleanSet from "./8-clean_set.js";

console.log(cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), 'bon'));
console.log(cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), ''));
```

### 9. Map data structure

Create a function named `groceriesList` that returns a map of groceries with the following items (name, quantity):

- Apples, 10

- Tomatoes, 10

- Pasta, 1

- Rice, 1

- Banana, 5

Example:

```javascript
import groceriesList from "./9-groceries_list.js";

console.log(groceriesList());
```

### 10. More map data structure

Create a function named `updateUniqueItems` that returns an updated map for all items with initial quantity at 1.

It should accept a map as an argument. The map it accepts for the argument is similar to the map you create in the previous task.

For each entry of the map where the quantity is 1, update the quantity to 100. If updating the quantity is not possible (argument is not a map), the error `Cannot process` should be thrown.

Example:

```javascript
import updateUniqueItems from "./10-update_uniq_items.js";
import groceriesList from "./9-groceries_list.js";

const map = groceriesList();
console.log(map);

updateUniqueItems(map)
console.log(map);
```
