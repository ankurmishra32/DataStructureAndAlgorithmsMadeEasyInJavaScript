// Problem-15 Insert a node in a sorted linked list
function insertInSortedList(headNode, newNode) {
  if (!headNode) {
    newNode.setNext(null);
    return newNode;
  }
  if (headNode.getData() >= newNode.getData()) {
    newNode.setNext(headNode);
    return newNode;
  }
  let previousNode = headNode;
  let currentNode = headNode.getNext();
  while (currentNode && currentNode.getData() < newNode.getData()) {
    previousNode = currentNode;
    currentNode = currentNode.getNext();
  }
  previousNode.setNext(newNode);
  newNode.setNext(currentNode);
  return headNode;
}

export default insertInSortedList;
