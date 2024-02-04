// Problem-14 Check whether the given linked list is either NULL-terminated or not.
// If there is a cycle, find the length of the loop
function findLoopLength(headNode) {
  let slowPtr = headNode;
  let fastPtr = headNode;
  let loopExist = false;
  let count = 1;
  while (fastPtr && fastPtr.getNext()) {
    fastPtr = fastPtr.getNext().getNext();
    slowPtr = slowPtr.getNext();
    if (slowPtr === fastPtr) {
      loopExist = true;
      break;
    }
  }
  if (loopExist) {
    fastPtr = fastPtr.getNext();
    while (slowPtr !== fastPtr) {
      fastPtr = fastPtr.getNext();
      count++;
    }
    console.log('Loop length is ', count);
  } else {
    console.log('Loop does not exist');
  }
}
