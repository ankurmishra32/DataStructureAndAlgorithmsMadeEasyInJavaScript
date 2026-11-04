// Problem-21 For the Problem-19, can we improve the time complexity using counting
function printRepeatedElementUsingCounting(array, n) {
  const count = [];
  const repeated = [];
  for (let i = 0; i <= n; i++) {
    count[i] = 0;
  }
  for (let i = 0; i < array.length; i++) {
    count[array[i]]++;
    if (count[array[i]] === 2) {
      console.log(array[i]);
      repeated.push(array[i]);
    }
  }
  return repeated;
}

export default printRepeatedElementUsingCounting;
