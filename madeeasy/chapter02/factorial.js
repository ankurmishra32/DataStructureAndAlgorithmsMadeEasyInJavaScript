// 2.4 format of a recursive function
// calulates factorial of a positive integer
function Fact(n) {
  // base case: fact of 1
  if (n === 1) {
    return 1;
  }
  // base case: fact of 0
  if (n === 0) {
    return 1;
  }
  // recursive case: multiply n by (n-1) factorial
  return n * Fact(n - 1);
}

export default { Fact };
