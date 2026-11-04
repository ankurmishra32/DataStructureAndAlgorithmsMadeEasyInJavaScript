// Inserting a Node at Front of a Circular Linked List
function InsertAtBeginingInCLL(headNode, nodeToInsert) {
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
  return nodeToInsert;
}

export default InsertAtBeginingInCLL;
