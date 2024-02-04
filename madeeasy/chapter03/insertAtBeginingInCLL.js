// Inserting a Node at Front of a Circular Linked List
function InsertAtBeginingInCLL(headNode, nodeToInsert) {
  let currentNode = headNode;
  while (currentNode.getNext() !== headNode) {
    currentNode = currentNode.getNext();
  }
  if (!headNode) {
    nodeToInsert.setNext(nodeToInsert);
  } else {
    nodeToInsert.setNext(headNode);
    currentNode.setNext(nodeToInsert);
  }
  headNode = nodeToInsert;
}
