// Ordered linear search
function orderedLinearSearch(array, item) {
  // will return either array index where item is located or -1 for not found
  let i;
  const { length } = array;
  for (i = 0; i < length; i++) {
    if (array[i] === item) {
      return i;
    } if (array[i] > item) {
      // just improved the not found senario
      // running time is almost same as of previous algo
      return -1;
    }
  }
  return -1;
}

export default orderedLinearSearch;
