// Bottom-up approach
function fibonacciBottomUp(num) {
  // Local cache — original code used a module-scoped `fibonacci[]` which
  // was shared with fibonacciTopDown, causing order-dependent results.
  const memo = [0, 1];
  for (let i = 2; i <= num; i++) {
    memo[i] = memo[i - 1] + memo[i - 2];
  }
  return memo[num];
}

export default fibonacciBottomUp;
