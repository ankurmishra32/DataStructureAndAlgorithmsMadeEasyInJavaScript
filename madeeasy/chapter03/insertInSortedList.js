// Problem-15 Insert a node in a sorted linked list
function insertInSortedList(headNode, newNode) {
  let previousNode;
  let currentNode = headNode;
  if (!headNode) {
    headNode = newNode;
    return;
  }
  while (currentNode && currentNode.getData() < newNode.getData()) {
    previousNode = currentNode;
    currentNode = currentNode.getNext();
  }
  previousNode.setNext(newNode);
  newNode.setNext(currentNode);
}
