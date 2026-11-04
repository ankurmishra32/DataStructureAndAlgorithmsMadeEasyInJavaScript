import ListLength from './listLength.js';

// Inserting a node in Doubly Linked List
function DLLInsert(headNode, nodeToInsert, position) {
  if (!headNode) {
    nodeToInsert.setPrevious(null);
    return nodeToInsert;
  }
  const size = ListLength(headNode);
  if (position > size + 1 || position < 1) {
    console.error(`Position of node to insert is invalid. The valid inputs are 1 to ${size + 1}`);
    return headNode;
  }
  if (position === 1) { // inserting at the beginning when there is some LinkList present
    nodeToInsert.setPrevious(null);
    nodeToInsert.setNext(headNode);
    headNode.setPrevious(nodeToInsert);
    return nodeToInsert;
  }
  let previousNode = headNode;
  let count = 1;
  while (count < position - 1) {
    previousNode = previousNode.getNext();
    count++;
  }
  const currentNode = previousNode.getNext();
  nodeToInsert.setNext(currentNode);
  nodeToInsert.setPrevious(previousNode);
  previousNode.setNext(nodeToInsert);
  if (currentNode) {
    currentNode.setPrevious(nodeToInsert);
  }
  return headNode;
}

export default DLLInsert;
