# Implicit Type Coercion Leading to NaN in JavaScript

This repository demonstrates a common JavaScript bug caused by implicit type coercion. The `foo` function adds two numbers, while `bar` doubles the result. However, when `null` is passed, the addition results in `NaN`, propagating through the functions.

## Bug Description

The bug arises from the implicit type coercion in JavaScript. When `null` is added to a number, the result is `NaN` (Not a Number). This `NaN` then gets multiplied by 2, resulting in the unexpected output.

## Bug Reproduction

1. Clone the repository.
2. Open `bug.js`.
3. Run the code in a JavaScript environment (e.g., Node.js, browser console).
4. Observe the unexpected output for `bar(null, 3)`. 

## Solution

The solution is to explicitly check for `null` or `undefined` values before performing arithmetic operations.  The `bugSolution.js` shows how to handle this with null checks and provide a default value.