import getMax from './getMax';

// 10.16 Bucket sort
function bucketSort(array, BUCKET) {
  const buckets = [];
  const { length } = array;
  if (BUCKET === undefined) {
    BUCKET = getMax(array) + 1;
  }
  // complexity O(BUCKET)
  for (let i = 0; i < BUCKET; i++) {
    buckets[i] = 0;
  }
  // complexity O(length)
  for (let i = 0; i < length; i++) {
    buckets[array[i]]++;
  }
  for (let i = 0, j = 0; j < BUCKET; j++) {
    for (let k = buckets[j]; k > 0; k--) {
      array[i++] = j;
    }
  }
}

export default bucketSort;
