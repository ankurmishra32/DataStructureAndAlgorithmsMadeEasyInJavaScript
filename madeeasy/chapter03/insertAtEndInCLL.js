// Inserting a Node at the End of a Circular Linked List
function InsertAtEndInCLL(headNode, nodeToInsert) {
  if (!headNode) {
    nodeToInsert.setNext(nodeToInsert);
    return nodeToInsert;
  }
  let currentNode = headNode;
  while (currentNode.getNext() !== headNode) {
    currentNode = currentNode.getNext();
  }
  nodeToInsert.setNext(headNode);
  currentNode.setNext(nodeToInsert);
  return headNode;
}

export default InsertAtEndInCLL;
