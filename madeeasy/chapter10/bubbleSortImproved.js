import swap from './swap';

// Above algorithm takes O(n^2) even in best case. We can improve it using an extra flag
// The only case where we can skip the remaining pass if array is already sorted. Best case O(n).
function bubbleSortImproved(array) {
  let swapped = 1;
  const { length } = array;
  for (let pass = length - 1; pass >= 0 && swapped; pass--) {
    swapped = 0;
    for (let i = 0; i < pass; i++) {
      if (array[i] > array[i + 1]) {
        swap(array, i, i + 1);
        swapped = 1;
      }
    }
  }
}
