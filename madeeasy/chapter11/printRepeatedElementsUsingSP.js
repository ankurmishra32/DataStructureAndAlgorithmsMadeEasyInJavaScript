import { Fact } from '../chapter02/factorial.js';

// Problem-23 For the Problem-19, is there yet another way of solving the problem
function printRepeatedElementsUsingSP(array, n) {
  let i;
  let S = 0;
  let P = 1; // Dfor difference, S for sum and P for product
  for (i = 0; i < n + 2; i++) {
    S += array[i];
    P *= array[i];
  }
  S -= (n * (n + 1)) / 2;
  P /= Fact(n);
  const D = Math.sqrt(S * S - 4 * P);

  console.log((S - D) / 2, (S + D) / 2);
}

export default printRepeatedElementsUsingSP;
