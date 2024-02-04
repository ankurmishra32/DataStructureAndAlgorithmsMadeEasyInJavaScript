import countingSort from './countingSort';
import getMax from './getMax';

// 10.17 Radix sort
function radixSort(array) {
  const max = getMax(array);
  console.log(max);
  for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
    countingSort(array, 10, exp);
  }
}
