function foo(a, b) {
  //Check if both arguments are numbers. If not, return an error message.
  if (typeof a !== 'number' || typeof b !== 'number') {
    return "Error: Both arguments must be numbers";
  }
  return a + b; // Performs numerical addition
}
console.log(foo(1, 2)); // Output: 3
console.log(foo(1, "2")); // Output: Error: Both arguments must be numbers