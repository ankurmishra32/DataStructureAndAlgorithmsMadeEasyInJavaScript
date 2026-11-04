// DP solution, adding memoization
function LCSLengthUsingDP(X, Y) {
  const m = X.length;
  const n = Y.length;
  // Local memo table — original used module-scoped `LCS` which broke
  // when called multiple times (subsequent calls saw stale state).
  const LCS = [];
  for (let i = 0; i <= m; i++) {
    LCS[i] = [];
    LCS[i][n] = 0;
  }
  for (let j = 0; j <= n; j++) {
    LCS[m][j] = 0;
  }
  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      LCS[i][j] = LCS[i + 1][j + 1];
      if (X[i] === Y[j]) {
        LCS[i][j]++;
      }
      if (LCS[i][j + 1] > LCS[i][j]) {
        LCS[i][j] = LCS[i][j + 1];
      }
      if (LCS[i + 1][j] > LCS[i][j]) {
        LCS[i][j] = LCS[i + 1][j];
      }
    }
  }
  return LCS[0][0];
}

export default LCSLengthUsingDP;
