import swap from './swap';

// 10.5 Bubble sort
function bubbleSort(array) {
  const { length } = array;
  for (let pass = length - 1; pass >= 0; pass--) {
    for (let i = 0; i < pass; i++) {
      if (array[i] > array[i + 1]) {
        swap(array, i, i + 1);
      }
    }
  }
}
