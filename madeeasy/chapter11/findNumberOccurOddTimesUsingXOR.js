// Problem-18 Find the number occuring odd number of times. Given an array of positive integers, all numbers occurs even
// numbers of times except one number which occure odd number of times. Find the number in O(n) time and constant space.
function findNumberOccurOddTimesUsingXOR(array) {
  let i;
  let X = 0;
  const { length } = array;
  for (i = 0; i < length; i++) {
    X ^= array[i];
  }
  return X;
}

export default findNumberOccurOddTimesUsingXOR;
