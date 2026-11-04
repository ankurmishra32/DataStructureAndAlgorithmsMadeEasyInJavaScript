// Further Improvement
function improvedFibonacci(num) {
  if (num === 0) return 0;
  if (num === 1) return 1;
  let a = 0;
  let b = 1;
  let sum = 0;
  for (let i = 1; i < num; i++) {
    sum = a + b;
    a = b;
    b = sum;
  }
  return sum;
}

export default improvedFibonacci;
