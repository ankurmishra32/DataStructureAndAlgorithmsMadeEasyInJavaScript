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

export default maxContigousSumUsingDP;
