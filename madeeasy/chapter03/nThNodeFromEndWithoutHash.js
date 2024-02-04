import ListLength from './listLength';

// Problem-4 Can we use Problem-3 approach for solving Problem-2 without creating hash table

function nThNodeFromEndWithoutHash(headNode, position) {
  const length = ListLength(headNode);
  if ((length < position) || (length < 1)) {
    console.error('Fewer no of nodes in the list');
    return;
  }
  const beginingPos = length - position + 1;
  let currentNode = headNode;
  let count = 1;
  while (count < beginingPos) {
    currentNode = currentNode.getNext();
    count++;
  }
  console.log('nTh node from end is ', currentNode);
}
