function foo(a, b) {
  return a + b;
}

function bar(x, y) {
  return foo(x, y) * 2;
}

console.log(bar(2, 3)); // Output: 10
console.log(bar(null, 3)); // Output: NaN