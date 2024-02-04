// Traversing the Linked List
function ListLength(headNode) {
  let length = 0;
  let currentNode = headNode;

  while (currentNode) {
    length++;
    currentNode = currentNode.getNext();
  }
  return length;
}

export default ListLength;
