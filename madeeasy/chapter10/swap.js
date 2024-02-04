function swap(array, left, right) {
  const temp = array[left];
  array[left] = array[right];
  array[right] = temp;
}

export default swap;
