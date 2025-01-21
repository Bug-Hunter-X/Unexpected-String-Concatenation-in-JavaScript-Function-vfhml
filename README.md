# Unexpected String Concatenation Bug in JavaScript

This repository demonstrates a common JavaScript bug related to type coercion and unexpected string concatenation.  The `foo` function is intended to add two numbers, but due to JavaScript's loose typing, passing a string as one of the arguments results in string concatenation instead of numerical addition.

## Bug Description
The `bug.js` file contains a function that unintentionally concatenates strings instead of adding numbers. The solution is shown in `bugSolution.js`

## How to Reproduce
1. Clone the repository.
2. Open `bug.js` and run it in a JavaScript environment (e.g., Node.js, browser console).
3. Observe that the output is "12" instead of 3, indicating string concatenation.

## Solution
The `bugSolution.js` file provides a corrected version of the function that explicitly handles type checking to ensure proper numerical addition.