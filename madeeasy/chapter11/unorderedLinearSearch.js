// 11.3 Types of Searching

// Unordered linear search
function unorderedLinearSearch(array, item) {
  // will return either array index where item is located or -1 for not found
  let i;
  const { length } = array;
  for (i = 0; i < length; i++) {
    if (array[i] === item) {
      return i;
    }
  }
  return -1;
}

export default unorderedLinearSearch;
