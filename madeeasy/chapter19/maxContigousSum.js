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

export default maxContigousSum;
