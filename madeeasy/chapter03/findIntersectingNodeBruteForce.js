// Problem-17 Suppose there are two singly linked list both of which
// intersect at some point and become single linked list...
// Brute-Force Approach
function findIntersectingNodeBruteForce(headOfFirst, headOfSecond) {
  const temp = headOfSecond;
  while (headOfFirst) {
    while (headOfSecond) {
      if (headOfFirst === headOfSecond) {
        return headOfFirst;
      }
      headOfSecond = headOfSecond.getNext();
    }
    headOfFirst = headOfFirst.getNext();
    headOfSecond = temp;
  }
  return null;
}
