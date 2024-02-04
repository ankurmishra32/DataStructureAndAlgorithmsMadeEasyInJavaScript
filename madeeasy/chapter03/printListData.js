// Printing the content of a Linked List
function PrintListData(headNode) {
  let string = '';
  let currentNode = headNode;
  while (currentNode) {
    string += `->${currentNode.getData()}`;
    currentNode = currentNode.getNext();
  }
  console.log('List Elements', string);
}
