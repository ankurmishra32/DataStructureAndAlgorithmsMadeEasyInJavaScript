import bucketSort from '../chapter10/bucketSort.js';

// Problem-20 For the Problem-19, can we improve the time complexity using sorting
function printRepeatedElementsUsingSorting(array, n) {
  const repeated = [];
  bucketSort(array, n + 2);
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] === array[i + 1]) {
      console.log(array[i]);
      repeated.push(array[i]);
      i++;
    }
  }
  return repeated;
}

export default printRepeatedElementsUsingSorting;
