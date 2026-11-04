// Problem-19 Find the two repeating elements in a given array: Given an array with n+2 elements, all elements of the array
// are in range 1 to n and also only once except two numbers which occurs twice. Find those two numbers.
function printRepeatedElementsUsingBruteForce(array, n) {
  let i;
  let j;
  for (i = 0; i < n + 1; i++) {
    for (j = i + 1; j < n + 2; j++) {
      if (array[i] === array[j]) {
        console.log(array[i]);
      }
    }
  }
}

export default printRepeatedElementsUsingBruteForce;
