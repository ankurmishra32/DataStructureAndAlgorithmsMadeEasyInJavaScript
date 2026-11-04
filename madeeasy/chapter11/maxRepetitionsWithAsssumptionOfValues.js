// Problem-8 For Problem-5 solution, can we improve the time complexity? Assume that array have all numbers are from rangle [0, n-1]
function maxRepetitionsWithAsssumptionOfValues(array) {
  let max = 0;
  let maxIndex = 0;
  const { length } = array;
  for (let i = 0; i < length; i++) {
    array[array[i] % length] += length;
  }
  for (let i = 0; i < length; i++) {
    if (array[i] / length > max) {
      max = array[i] / length;
      maxIndex = i;
    }
  }
  return maxIndex;
}

export default maxRepetitionsWithAsssumptionOfValues;
