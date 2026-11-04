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

export default maxContigousSumImproved;
