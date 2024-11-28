# 0x06. Unittests in JS

## Description

This project is part of the ALX Software Engineering program. It focuses on writing unit tests in JavaScript using various tools and libraries.

## Author

Tariq Omer

## Specializations

- UnitTests
- Back-end
- JavaScript
- ES6
- NodeJS
- ExpressJS
- Mocha

## Project Details

- **Weight:** 1
- **Start Date:** Nov 27, 2024 5:00 AM
- **End Date:** Nov 29, 2024 5:00 AM
- **Checker Release:** Nov 27, 2024 5:00 PM
- **Auto Review:** At the deadline

## Resources

Read or watch:

- [Mocha documentation](https://mochajs.org/)
- [Chai](https://www.chaijs.com/)
- [Sinon](https://sinonjs.org/)
- [Express](https://expressjs.com/)
- [Request](https://github.com/request/request)
- [How to Test NodeJS Apps using Mocha, Chai and SinonJS](https://www.digitalocean.com/community/tutorials/how-to-test-nodejs-apps-using-mocha-chai-and-sinonjs)

## Learning Objectives

By the end of this project, I should be able to explain:

- How to use Mocha to write a test suite
- How to use different assertion libraries (Node or Chai)
- How to present long test suites
- When and how to use spies
- When and how to use stubs
- What are hooks and when to use them
- Unit testing with Async functions
- How to write integration tests with a small node server

## Requirements

- All code will be executed on Ubuntu 18.04 using Node 12.x.x
- Allowed editors: vi, vim, emacs, Visual Studio Code
- All files should end with a new line
- A `README.md` file at the root of the project is mandatory
- Code should use the `.js` extension
- When running tests with `npm run test *.test.js`, everything should pass without any warnings or errors

## Tasks

### 0. Basic test with Mocha and Node assertion library

- **Files:** `package.json`, `0-calcul.js`, `0-calcul.test.js`
- **Description:** Create a function `calculateNumber` that rounds two numbers and returns their sum. Write test cases for this function using Mocha and Node's assert library.

### 1. Combining descriptions

- **Files:** `1-calcul.js`, `1-calcul.test.js`
- **Description:** Upgrade the `calculateNumber` function to handle different operations (SUM, SUBTRACT, DIVIDE). Write test cases using Mocha and Node's assert library.

### 2. Basic test using Chai assertion library

- **Files:** `2-calcul_chai.js`, `2-calcul_chai.test.js`
- **Description:** Rewrite the test suite from task 1 using Chai's `expect` assertion style.

### 3. Spies

- **Files:** `utils.js`, `3-payment.js`, `3-payment.test.js`
- **Description:** Use Sinon to create spies for testing the `sendPaymentRequestToApi` function.

### 4. Stubs

- **Files:** `4-payment.js`, `4-payment.test.js`
- **Description:** Use Sinon to create stubs for testing the `sendPaymentRequestToApi` function, simulating different behaviors.

### 5. Hooks

- **Files:** `5-payment.js`, `5-payment.test.js`
- **Description:** Use Mocha hooks (`beforeEach`, `afterEach`) to set up and tear down conditions for tests.

### 6. Async tests with done

- **Files:** `6-payment_token.js`, `6-payment_token.test.js`
- **Description:** Write tests for asynchronous functions using the `done` callback.

### 7. Skip

- **Files:** `7-skip.test.js`
- **Description:** Use Mocha's `skip` feature to skip failing tests without removing them.

### 8. Basic Integration testing

- **Files:** `8-api/package.json`, `8-api/api.js`, `8-api/api.test.js`
- **Description:** Write integration tests for an Express server.

### 9. Regex integration testing

- **Files:** `9-api/api.js`, `9-api/api.test.js`, `9-api/package.json`
- **Description:** Add and test a new endpoint with route parameters using regex.

### 10. Deep equality & Post integration testing

- **Files:** `10-api/api.js`, `10-api/api.test.js`, `10-api/package.json`
- **Description:** Add and test new endpoints for returning JSON objects and handling POST requests.

## Repository

- **GitHub repository:** alx-backend-javascript
- **Directory:** 0x06-unittests_in_js
