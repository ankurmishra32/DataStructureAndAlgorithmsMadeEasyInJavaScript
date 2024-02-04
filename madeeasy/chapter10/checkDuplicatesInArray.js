// Problem-1 Given an array of n numbers containing repetition of some numbers. Check whether there are repeated elements or not.
// Assume that we are not allowed to use additional space (but we can use temporary variables, O(1) storage).
function checkDuplicatesInArray(array) {
  const { length } = array;
  for (let i = 0; i < length - 1; i++) {
    for (let j = i + 1; j < length; j++) {
      if (array[i] === array[j]) { return true; }
    }
  }
  return false;
}
