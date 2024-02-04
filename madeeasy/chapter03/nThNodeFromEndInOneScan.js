// Problem-5 Can we solve Problem-2 in one scan
function nThNodeFromEndInOneScan(headNode, position) {
  let pTemp = headNode;
  let nThNode = headNode;
  let count = 0;
  while (pTemp) {
    count++;
    if (position - count < 0) {
      nThNode = nThNode.getNext();
    }
    pTemp = pTemp.getNext();
  }
  if (count >= position) {
    console.log('nTh node from end is ', nThNode);
    return;
  }
  console.error('Fewer no of nodes in the list');
}
