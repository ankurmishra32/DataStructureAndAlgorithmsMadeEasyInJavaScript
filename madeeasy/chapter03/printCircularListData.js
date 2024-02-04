// Printing the content of a Circular List
function PrintCircularListData(headNode) {
  let string = '';
  let currentNode = headNode;
  while (currentNode) {
    string += `->${currentNode.getData()}`;
    currentNode = currentNode.getNext();
    if (currentNode === headNode) {
      break;
    }
  }
  console.log('List Elements', string);
}

export default PrintCircularListData;
