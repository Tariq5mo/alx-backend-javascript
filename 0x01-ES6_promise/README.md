# 0x01. ES6 Promises

## Overview

This project is part of the ALX Software Engineering Program. It's designed to help me understand and implement the fundamentals of ES6 Promises. By the end of this project, I should be able to explain various concepts related to Promises without needing to look them up.

## Learning Objectives

By completing this project, I aim to understand:

- Promises (how, why, and what)

- How to use the `then`, `resolve`, `catch` methods

- How to use every method of the Promise object

- Throw / Try

- The `await` operator

- How to use an `async` function

## Requirements

### General

- All files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x

- Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`

- All files should end with a new line

- A `README.md` file is mandatory

- Code should use the `.js` extension

- Code will be tested using Jest and the command `npm run test`

- Code will be verified against lint using ESLint

- All functions must be exported

## Key ES6 Promises Concepts

### Promises

A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. It allows you to write asynchronous code in a more synchronous fashion.

### `then`, `resolve`, and `catch` Methods

- `then`: Attaches callbacks for the resolution and/or rejection of the Promise.

- `resolve`: A method to create a Promise that is resolved with the given value.

- `catch`: Attaches a callback for only the rejection of the Promise.

### Using Promise Methods

Learn how to utilize various methods of the Promise object to manage asynchronous operations effectively.

### Throw / Try

Understand how to use the `throw` statement to generate exceptions and the `try...catch` statement to handle exceptions.

### The `await` Operator

The `await` operator is used to wait for a Promise. It can only be used inside an `async` function.

### `async` Functions

`async` functions allow you to write asynchronous code using synchronous syntax. These functions return a Promise.

## Tasks

### 0. Keep every promise you make and only make promises you can keep

Return a Promise using this prototype:

```js
function getResponseFromAPI()
```

Example:

```js
import getResponseFromAPI from "./0-promise.js";

const response = getResponseFromAPI();
console.log(response instanceof Promise);
```

### 1. Don't make a promise...if you know you can't keep it

Return a promise. The parameter is a boolean.

```js
function getFullResponseFromAPI(success)
```

Example:

```js
import getFullResponseFromAPI from './1-promise';

console.log(getFullResponseFromAPI(true));
console.log(getFullResponseFromAPI(false));
```

### 2. Catch me if you can

Append three handlers to the function:


```js
function handleResponseFromAPI(promise)
```

Example:


```js
import handleResponseFromAPI from "./2-then";

const promise = Promise.resolve();
handleResponseFromAPI(promise);
```

### 3. Handle multiple successful promises

Use the following prototype:


```js
function handleProfileSignup()
```

Example:

```js
import handleProfileSignup from "./3-all";

handleProfileSignup();
```

### 4. Simple promise

Return a resolved promise with this object:

```js
{
  firstName: value,
  lastName: value,
}
```

Example:


```js
import signUpUser from "./4-user-promise";

console.log(signUpUser("Bob", "Dylan"));
```

### 5. Reject the promises

Return a Promise rejecting with an Error. Example:


```js
import uploadPhoto from './5-photo-reject';

console.log(uploadPhoto('guillaume.jpg'));
```

### 6. Handle multiple promises

Combine multiple promises and return their results. Example:


```js
import handleProfileSignup from './6-final-user';

console.log(handleProfileSignup("Bob", "Dylan", "bob_dylan.jpg"));
```

### 7. Load balancer

Return the value from the promise that resolved first. Example:


```js
import loadBalancer from "./7-load_balancer";

const promiseUK = new Promise((resolve, reject) => { setTimeout(resolve, 100, 'UK'); });
const promiseFR = new Promise((resolve, reject) => { setTimeout(resolve, 200, 'FR'); });

const test = async () => {
    console.log(await loadBalancer(promiseUK, promiseFR));
};

test();
```

### 8. Throw error / try catch

Throw an error if the denominator is zero. Example:


```js
import divideFunction from './8-try';

console.log(divideFunction(10, 2));
console.log(divideFunction(10, 0));
```

### 9. Throw an error

Create a guardrail array to catch errors. Example:


```js
import guardrail from './9-try';
import divideFunction from './8-try';

console.log(guardrail(() => divideFunction(10, 2)));
console.log(guardrail(() => divideFunction(10, 0)));
```

### 10. Await / Async

Return an object from two async function calls. Example:


```js
import asyncUploadUser from "./100-await";

const test = async () => {
    const value = await asyncUploadUser();
    console.log(value);
};

test();
```
