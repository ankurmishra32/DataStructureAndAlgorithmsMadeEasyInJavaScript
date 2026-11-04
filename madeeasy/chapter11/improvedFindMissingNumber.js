// Problem-16 For Problem-13, can we improve the complexity?
function improvedFindMissingNumber(array, limit) {
  let i;
  let sum = 0;
  const { length } = array;
  if (limit === undefined) {
    limit = length + 1;
  }
  // Sum of 1 to n numbers are n*(n+1)/2
  for (i = 0; i < length; i++) {
    sum += array[i];
  }
  const numb = (limit * (limit + 1)) / 2 - sum;
  return numb || -1;
}

export default improvedFindMissingNumber;
