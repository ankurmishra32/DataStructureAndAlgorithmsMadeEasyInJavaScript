// 10.8 Shell sort
function shellSort(array) {
  const { length } = array;
  for (let gap = Math.floor(length / 2); gap > 0; gap = Math.floor(gap / 2)) {
    // Modified Insersion Sort
    for (let pass = gap; pass < length; pass++) {
      const temp = array[pass];
      let i = pass - gap;
      while (array[i] > temp && i >= 0) {
        array[i + gap] = array[i];
        i -= gap;
      }
      array[i + gap] = temp;
    }
  }
}

export default shellSort;
