// 19.7 Understanding the dynamic programming

// Fabonacci Series

function recursiveFibonacci(num) {
  if (num === 0) return 0;
  if (num === 1) return 1;
  return recursiveFibonacci(num - 1) + recursiveFibonacci(num - 2);
}

const fibonacci = [];

// Bottom-up approach
function fibonacciBottomUp(num) {
  fibonacci[0] = 0;
  fibonacci[1] = 1;
  for (let i = 2; i <= num; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
  }
  return fibonacci[num];
}

// Top-down approach
function fibonacciTopDown(num) {
  if (num === 0) return 0;
  if (num === 1) return 1;
  if (fibonacci[num] !== undefined) return fibonacci[num];
  return fibonacciTopDown(num - 1) + fibonacciTopDown(num - 2);
}

// Further Improvement
function improvedFibonacci(num) {
  if (num === 0) return 0;
  if (num === 1) return 1;
  let a = 0;
  let b = 1;
  let sum;
  for (let i = 1; i < num; i++) {
    sum = a + b;
    a = b;
    b = sum;
  }
  return sum;
}

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

// DP solution, adding memoization
const LCS = [];
function LCSLengthUsingDP(X, Y) {
  const m = X.length;
  const n = Y.length;
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

// 19.8

// Problem-1
function recurrenceToCode(num) {
  if (num === 0 || num === 1) {
    return 2;
  }
  let sum = 0;
  for (let i = 1; i < num; i++) {
    sum += 2 * recurrenceToCode(num) * recurrenceToCode(num - 1);
  }
  return sum;
}

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

// Problem-3 Can we further improve Problem-2
function improvedRecurrenceToCode(num) {
  const T = [2, 2];
  T[2] = 2 * T[1] * T[0];
  for (let i = 3; i <= num; i++) {
    T[i] = T[i - 1] + 2 * T[i] * T[i - 1];
  }
  return T[num];
}

// Problem-4 Maximum Value Contigous Subsequence
function maxContigousSum(array) {
  let maxSum = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = i; j < array.length; j++) {
      let currentSum = 0;
      for (let k = i; k <= j; k++) {
        currentSum += array[k];
      }
      if (maxSum < currentSum) {
        maxSum = currentSum;
      }
    }
  }
  return maxSum;
}

// Problem-5 Can we improve Problem-4
function maxContigousSumImproved(array) {
  let maxSum = 0;
  for (let i = 0; i < array.length; i++) {
    let currentSum = 0;
    for (let j = i; j < array.length; j++) {
      currentSum += array[j];
      if (maxSum < currentSum) {
        maxSum = currentSum;
      }
    }
  }
  return maxSum;
}

// Problem-6 Can we solve Problem-4 using DP
function maxContigousSumUsingDP(array) {
  const memoization = [];
  let maxValue = 0;
  memoization[0] = array[0] > 0 ? array[0] : 0;
  for (let i = 1; i < array.length; i++) {
    memoization[i] = memoization[i - 1] + array[i];
    if (memoization[i] < 0) {
      memoization[i] = 0;
    }
    if (maxValue < memoization[i]) {
      maxValue = memoization[i];
    }
  }
  return maxValue;
}
