// Problem-28 How will you display a linked list from the end?
// Traverse recursively till the end
function PrintListFromTheEnd(headNode) {
  if (!headNode) {
    return;
  }
  PrintListFromTheEnd(headNode.getNext());
  console.log(headNode.getData());
}
