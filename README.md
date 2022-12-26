# Javascript

JavaScript is an object-oriented programming language that is used to generate websites and applications. It was designed to build dynamic web pages at first. A script is a JS program that may be added to the HTML of any web page. When the page loads, these scripts execute automatically.

A language that was originally designed to build dynamic web pages may now be run on the server and on almost any device that has the JavaScript Engine installed.

## JavaScript Engine

The JavaScript Engine is a program whose responsibility is to execute JavaScript code. All modern browsers come with their own version of the JavaScript Engine but the most popular one is Google’s V8 Engine. Google’s V8 engine powers Google Chrome browsers, as well as, Node.js. Node.js is a JavaScript runtime that is used to build server-side applications outside of the browser.

## Data Types in JavaScript

**Primitive** - Stores a single value.

**Non - Primitive** - Stores multiple and complex values.

**typeof** operator is used to find the type of Data Type

### Using const keyword

const firstName;

console.log(typeof firstName); - Error: Uncaught SyntaxError: Missing initializer in const declaration

**For const declaration, compiler requires an intialization else an error will be thrown.**

### Using let keyword

let lastName;

console.log(typeof lastName); //undefined

let lastName2 = null;

console.log(typeof lastName2); //object

let lastName3 = NaN;

console.log(typeof lastName3); //Number

let lastName4 = undefined;

console.log(typeof lastName4); //undefined

### Using var keyword

var fullName; 

console.log(typeof fullName); //undefined

var fullName2 = null;

console.log(typeof fullName2); //object

var fullName3 = NaN;

console.log(typeof fullName3); //Number

var fullName4 = undefined;

console.log(typeof fullName4); //undefined

### Using object with var keyword

var numberPair = {
    1: '2',
    2: '3',
    3: '4',
    sai: "katta"
};

console.log(typeof numberPair); // object

### Using object with const keyword

const anotherPair = ["2", "Sai", 2.3, 99.99];

console.log(typeof anotherPair); // object

**Note- It is important to remember that any data type that is not a primitive data type, is of Object type in javascript.**

## Hoisting in JavaScript

Hoisting is the default behaviour of javascript where all the variable and function declarations are moved on top. This means that irrespective of where the variables and functions are declared, they are moved on top of the scope. The scope can be both local and global.

**Example 1:**

hoistedVariable = 3;

console.log(hoistedVariable); // outputs 3 even when the variable is declared after it

var hoistedVariable;

**Example 2:**

hoistedFunction(); // Outputs " Hello world! " even when the function is declared after

function hoistedFunction(){

  console.log(" Hello world! ");
  
}

**Example 3:**

// Hoisting takes place in the local scope as well

function doSomething(){

x = 33;

console.log(x);

var x;

}

doSomething(); // Outputs 33 since the local variable “x” is hoisted inside the local scope

**Note - Variable initializations are not hoisted, only variable declarations are hoisted:**

var x;

console.log(x); // Outputs "undefined" since the initialization of "x" is not hoisted

x = 23;

**Note - To avoid hoisting, you can run javascript in strict mode by using “use strict” on top of the code:**

"use strict";

x = 23; // Gives an error since 'x' is not declared

var x;

## Debugger in JavaScript

The debugger for the browser must be activated in order to debug the code. Built-in debuggers may be switched on and off, requiring the user to report faults. The remaining section of the code should stop execution before moving on to the next line while debugging.

## Difference between “ == “ and “ === “ operators.

Both are comparison operators. The difference between both the operators is that “==” is used to compare values whereas, “ === “ is used to compare both values and types.

var x = 2;

var y = "2";

(x == y)  // Returns true since the value of both x and y is the same

(x === y) // Returns false since the typeof x is "number" and typeof y is "string

## Difference between var and let keyword in javascript.

Some differences are 

1. From the very beginning, the 'var' keyword was used in JavaScript programming whereas the keyword 'let' was just added in 2015.

2. The keyword 'Var' has a function scope. Anywhere in the function, the variable specified using var is accessible but in ‘let’ the scope of a variable declared with the 'let' keyword is limited to the block in which it is declared. Let's start with a Block Scope.

3. In ECMAScript 2015, let and const are hoisted but not initialized. Referencing the variable in the block before the variable declaration results in a ReferenceError because the variable is in a "temporal dead zone" from the start of the block until the declaration is processed.
