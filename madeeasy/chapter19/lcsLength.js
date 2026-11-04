// Longest Common Subsequence
// X[i, ... m-1] and Y[j, ... n-1]
function LCSLength(X, i, m, Y, j, n) {
  if (i === m || j === n) {
    return 0;
  }
  if (X[i] === Y[j]) {
    return 1 + LCSLength(X, i + 1, m, Y, j + 1, n);
  }
  return Math.max(LCSLength(X, i + 1, m, Y, j, n), LCSLength(X, i, m, Y, j + 1, n));
}

export default LCSLength;
