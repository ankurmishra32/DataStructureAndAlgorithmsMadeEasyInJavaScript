import bucketSort from '../chapter10/bucketSort.js';

// Problem-14 For Problem-13, can we use sorting technique?
function findMissingNumberUsingSorting(array, limit) {
  let i;
  const { length } = array;
  if (limit === undefined) {
    limit = length + 1;
  }
  // We are using bucket sort as it have very less complexity and suitable for the given condition
  bucketSort(array, limit + 1);
  for (i = 0; i < length; i++) {
    if (array[i] !== i + 1) {
      return i + 1;
    }
  }
  return limit;
}

export default findMissingNumberUsingSorting;
