// 19.7 Understanding the dynamic programming

// Fabonacci Series

function recursiveFibonacci(num) {
  if (num === 0) return 0;
  if (num === 1) return 1;
  return recursiveFibonacci(num - 1) + recursiveFibonacci(num - 2);
}

export default recursiveFibonacci;
