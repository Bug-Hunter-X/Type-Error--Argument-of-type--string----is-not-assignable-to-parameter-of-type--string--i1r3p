# Type Error: Argument of type 'string[]' is not assignable to parameter of type 'string'

This repository demonstrates a common TypeScript error: passing an array of strings to a function that expects a single string.

## The Bug

The `bug.ts` file contains a function `greeter` that expects a single string argument.  However, it's called with an array of strings.

## The Solution

The `bugSolution.ts` file shows two ways to fix this:

1.  Iterate over the array and call the function for each element.
2.  Modify the function signature to accept an array of strings.