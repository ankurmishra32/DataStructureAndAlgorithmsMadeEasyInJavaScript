// Problem-7 Is there any other way of solving Problem-4?
function maxContigousSumWithoutDP(array) {
  let sumSoFar = 0;
  let sumEndingHere = 0;
  for (let i = 0; i < array.length; i++) {
    sumEndingHere += array[i];
    if (sumEndingHere < 0) {
      sumEndingHere = 0;
      continue;
    }
    if (sumSoFar < sumEndingHere) {
      sumSoFar = sumEndingHere;
    }
  }
  return sumSoFar;
}

export default maxContigousSumWithoutDP;
