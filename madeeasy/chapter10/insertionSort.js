// 10.7 Insertion sort
function insertionSort(array) {
  const { length } = array;
  for (let pass = 1; pass < length; pass++) {
    const temp = array[pass];
    let i = pass - 1;
    while (array[i] > temp && i >= 0) {
      array[i + 1] = array[i];
      i--;
    }
    array[i + 1] = temp;
  }
}
