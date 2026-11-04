// Problem-8 In Problem-6 solution, we have assumed that Memoization(i) indicates maximum sum over all windows ending at i.
// Can we assume Memoization(i) indicates maximum sum over all windows starting at i and ending at n?
function maxContigousSumUsingDPModified(array) {
  if (array.length === 0) {
    return 0;
  }
  const memoization = [];
  let maxValue = 0;
  const last = array.length - 1;
  memoization[last] = array[last] > 0 ? array[last] : 0;
  maxValue = memoization[last];
  for (let i = last - 1; i >= 0; i--) {
    memoization[i] = memoization[i + 1] + array[i];
    if (memoization[i] < 0) {
      memoization[i] = 0;
    }
    if (maxValue < memoization[i]) {
      maxValue = memoization[i];
    }
  }
  return maxValue;
}

export default maxContigousSumUsingDPModified;
