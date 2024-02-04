import ListLength from './listLength';

// Inserting a node in Singly Linked List
function InsertInLinkedList(headNode, nodeToInsert, position) {
  let count = 1;
  let previousNode;
  if (!headNode || !headNode.getData()) { // inserting at the beginning when no LinkList present
    headNode = nodeToInsert;
    return;
  }
  const size = ListLength(headNode);
  if (position > size + 1 || position < 1) {
    console.error(`Position of node to insert is invalid. The valid inputs are 1 to ${size + 1}`);
    return;
  }
  if (position === 1) { // inserting at the beginning when there is some LinkList present
    nodeToInsert.setNext(headNode);
    headNode = nodeToInsert;
    return;
  }
  previousNode = headNode;
  while (count < position - 1) {
    previousNode = previousNode.getNext();
    count++;
  }
  const currentNode = previousNode.getNext();
  nodeToInsert.setNext(currentNode);
  previousNode.setNext(nodeToInsert);
}
