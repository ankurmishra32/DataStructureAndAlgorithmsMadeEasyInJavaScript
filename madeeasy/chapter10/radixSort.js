import countingSort from './countingSort.js';
import getMax from './getMax.js';

// 10.17 Radix sort
function radixSort(array) {
  const max = getMax(array);
  for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
    countingSort(array, 10, exp);
  }
}
export default radixSort;
