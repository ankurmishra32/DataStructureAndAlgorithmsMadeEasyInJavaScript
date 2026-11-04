// Problem-2 Improvement of Problem-1 using memoization of DP
function recurrenceToCodeUsingDP(num) {
  const T = [2, 2];
  for (let i = 2; i <= num; i++) {
    T[i] = 0;
    for (let j = 1; j < i; j++) {
      T[i] += 2 * T[j] * T[j - 1];
    }
  }
  return T[num];
}

export default recurrenceToCodeUsingDP;
