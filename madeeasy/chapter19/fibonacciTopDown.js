// Top-down approach
function fibonacciTopDown(num) {
  // Local cache, fresh per call, so we don't depend on prior call state.
  const memo = [0, 1];
  function helper(n) {
    if (memo[n] !== undefined) return memo[n];
    memo[n] = helper(n - 1) + helper(n - 2);
    return memo[n];
  }
  return helper(num);
}

export default fibonacciTopDown;
