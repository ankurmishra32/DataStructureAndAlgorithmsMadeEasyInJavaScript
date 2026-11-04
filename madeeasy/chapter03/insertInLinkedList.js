import ListLength from './listLength.js';

// Inserting a node in Singly Linked List
function InsertInLinkedList(headNode, nodeToInsert, position) {
  if (!headNode) {
    return nodeToInsert;
  }
  const size = ListLength(headNode);
  if (position > size + 1 || position < 1) {
    console.error(`Position of node to insert is invalid. The valid inputs are 1 to ${size + 1}`);
    return headNode;
  }
  if (position === 1) { // inserting at the beginning when there is some LinkList present
    nodeToInsert.setNext(headNode);
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
  previousNode.setNext(nodeToInsert);
  return headNode;
}

export default InsertInLinkedList;
