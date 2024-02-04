// Traversing the Linked List
function CircularListLength(headNode) {
  let length = 0;
  let currentNode = headNode;
  while (currentNode) {
    length++;
    currentNode = currentNode.getNext();
    if (currentNode === headNode) {
      break;
    }
  }
  return length;
}
