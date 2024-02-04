// Problem-11 Check whether the given linked list is either NULL-terminated or not. If there is a cycle, find the start node of the loop
// Its the extended version of previous solution (Problem-9).
function findBegninOfLoop(headNode) {
  let slowPtr = headNode;
  let fastPtr = headNode;
  let loopExist = false;
  while (fastPtr && fastPtr.getNext()) {
    fastPtr = fastPtr.getNext().getNext();
    slowPtr = slowPtr.getNext();
    if (slowPtr === fastPtr) {
      loopExist = true;
      break;
    }
  }
  if (loopExist) {
    slowPtr = headNode;
    while (slowPtr !== fastPtr) {
      fastPtr = fastPtr.getNext();
      slowPtr = slowPtr.getNext();
    }
    console.log('Loop start from', slowPtr);
  } else {
    console.error('Loop does not exist');
  }
}
