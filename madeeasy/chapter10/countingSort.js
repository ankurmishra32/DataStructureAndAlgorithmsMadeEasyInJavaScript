import getMax from './getMax';

// 10.15 Counting sort
function countingSort(array, limit, exp) {
  const temp = [];
  const result = [];
  const { length } = array;
  exp = exp || 1;
  if (limit === undefined) {
    limit = getMax(array) + 1;
  }
  // complexity O(limit)
  for (let i = 0; i < limit; i++) {
    temp[i] = 0;
  }
  // complexity O(length)
  for (let i = 0; i < length; i++) {
    // temp[array[i]]++;
    // modified for radix sort
    temp[(array[i] / exp) % limit]++;
  }
  // complexity O(limit)
  for (let i = 1; i < limit; i++) {
    temp[i] += temp[i - 1];
  }
  // complexity O()
  for (let i = length - 1; i >= 0; i--) {
    // result[temp[array[i]] - 1] = array[i];
    // modified for radix sort
    result[temp[(array[i] / exp) % limit] - 1] = array[i];
    // temp[array[i]]--;
    // modified for radix sort
    temp[(array[i] / exp) % limit]--;
  }
  // modified array to get the result
  for (let i = 0; i < length; i++) {
    array[i] = result[i];
  }
}

export default countingSort;
