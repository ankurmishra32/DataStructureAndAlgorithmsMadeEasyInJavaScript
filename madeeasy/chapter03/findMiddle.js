// Problem-27 Can we solve Problem-24 in one scan?
// Efficient Approach
function findMiddle(headNode) {
  let i = 0;
  let temp = headNode;
  while (headNode) {
    if (i === 0) {
      i = 1;
      headNode = headNode.getNext();
    } else if (i === 1) {
      i = 0;
      temp = temp.getNext();
      headNode = headNode.getNext();
    }
  }
  return temp;
}
