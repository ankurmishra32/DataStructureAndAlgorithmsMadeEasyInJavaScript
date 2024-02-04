import swap from './swap';

// 10.6 Selection sort
function selectionSort(array) {
  let i;
  let pass;
  let min;
  const { length } = array;
  for (pass = 0; pass < length - 1; pass++) {
    min = pass;
    for (i = pass + 1; i < length; i++) {
      if (array[i] < array[min]) {
        min = i;
      }
    }
    swap(array, min, pass);
  }
}
