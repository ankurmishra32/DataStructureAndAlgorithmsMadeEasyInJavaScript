// Problem-9 Given the array of n numbers, give an algorithm to find first element in the array which is repeated.
// Brute-force method
function firstRepeatBruteForce(array) {
  let i;
  let j;
  const { length } = array;
  for (i = 0; i < length - 1; i++) {
    for (j = i + 1; j < length; j++) {
      if (array[i] === array[j]) {
        return array[i];
      }
    }
  }
}

export default firstRepeatBruteForce;
