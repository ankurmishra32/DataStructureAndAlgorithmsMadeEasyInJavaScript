import ListLength from './listLength';

// Problem-23 Can we improve the complexity of Problem-17
// Efficient Approach
function findIntersectingNode(headOfFirst, headOfSecond) {
  const lengthOfFirst = ListLength(headOfFirst);
  const lengthOfSecond = ListLength(headOfSecond);
  let diff = lengthOfFirst - lengthOfSecond;
  if (lengthOfFirst < lengthOfSecond) {
    const temp = headOfFirst;
    headOfFirst = headOfSecond;
    headOfSecond = temp;
    diff = lengthOfSecond - lengthOfFirst;
  }
  for (let i = 0; i < diff; i++) {
    headOfFirst = headOfFirst.getNext();
  }
  while (headOfFirst && headOfSecond) {
    if (headOfFirst === headOfSecond) {
      return headOfFirst;
    }
    headOfFirst = headOfFirst.getNext();
    headOfSecond = headOfSecond.getNext();
  }
  return null;
}
