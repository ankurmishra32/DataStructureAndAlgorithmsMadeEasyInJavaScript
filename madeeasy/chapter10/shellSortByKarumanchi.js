// Shell sort as per the Karumanchi book version
function shellSortByKarumanchi(array) {
  let h;
  const { length } = array;
  for (h = 1; h < length / 9; h = 3 * h + 1);
  for (; h > 0; h = Math.floor(h / 3)) {
    for (let i = h + 1; i < length; i++) {
      const v = array[i];
      let j = i;
      while (j >= h && array[j - h] > v) {
        array[j] = array[j - h];
        j -= h;
      }
      array[j] = v;
    }
  }
}
