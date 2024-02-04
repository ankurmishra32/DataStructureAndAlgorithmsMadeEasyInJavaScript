// Problem-25 Can we improve the complexity of Problem-24?
// By finding length
function findMiddleByLength(headNode) {
  let length = 0;
  let temp = headNode;
  while (headNode) {
    headNode = headNode.getNext();
    length++;
  }
  const middle = parseInt((length / 2), 10);
  length = 0;
  while (length !== middle) {
    temp = temp.getNext();
    length++;
  }
  return temp;
}
