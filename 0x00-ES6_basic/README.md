# 0x00. ES6 Basics

## Overview

This project is part of the ALX Software Engineering Program. It's designed to help me understand and implement the fundamentals of ES6 (ECMAScript 2015). By the end of this project, I should be able to explain various ES6 concepts without needing to look them up.

## Learning Objectives

By completing this project, I aim to understand:

- What ES6 is
- New features introduced in ES6
- The difference between a constant and a variable
- Block-scoped variables
- Arrow functions and function parameters default to them
- Rest and spread function parameters
- String templating in ES6
- Object creation and their properties in ES6
- Iterators and for-of loops

## Requirements

### General

- All files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x
- Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`
- All files should end with a new line
- A `README.md` file is mandatory
- Code should use the `.js` extension
- Code will be tested using the Jest Testing Framework
- Code will be analyzed using the linter ESLint along with specific rules provided
- All functions must be exported

## Key ES6 Concepts

### ES6 Overview

ES6, also known as ECMAScript 2015, is a significant update to the JavaScript language. It introduced many new features and improvements to make the language more powerful and easier to use.

### New Features in ES6

- **Let and Const**: New ways to declare variables, with `let` for block-scoped variables and `const` for constants.
- **Arrow Functions**: A shorter syntax for writing functions using the `=>` syntax.
- **Template Literals**: Enhanced string literals that allow for embedded expressions.
- **Default Parameters**: Allows parameters to have default values.
- **Rest and Spread Operators**: Simplify working with arrays and function arguments.
- **Destructuring Assignment**: A way to unpack values from arrays or properties from objects into distinct variables.
- **Modules**: ES6 introduces a standard for modular code using `import` and `export`.
- **Classes**: A new syntax for creating objects and dealing with inheritance.
- **Iterators and Generators**: New protocols for working with iterable objects.

### Constants vs Variables

- **Constants** (`const`): Values that cannot be reassigned after their initial assignment.
- **Variables** (`let` and `var`): Values that can be reassigned. `let` is block-scoped, while `var` is function-scoped.

### Block-Scoped Variables

Variables declared with `let` and `const` are block-scoped, meaning they are only available within the block they are defined.

### Arrow Functions

Arrow functions provide a concise syntax for writing functions. They also lexically bind the `this` value, making them handy for use in methods.

### Rest and Spread Operators

- **Rest Operator** (`...`): Allows you to represent an indefinite number of arguments as an array.
- **Spread Operator** (`...`): Allows an iterable to expand in places where zero or more arguments are expected.

### String Templating

Template literals are enclosed by back-ticks (`` ` ``) and can contain placeholders for embedded expressions.

### Object Creation and Properties

ES6 provides shorthand syntax for initializing properties and defining methods in objects.

### Iterators and For-Of Loops

- **Iterators**: An object which defines a sequence and potentially a return value upon its termination.
- **For-Of Loops**: A loop that iterates over iterable objects, such as arrays, strings, and node lists.

## Tasks

This project has various tasks to practice and implement the above concepts. Each task will help reinforce the learning objectives and build a strong foundation in ES6.
