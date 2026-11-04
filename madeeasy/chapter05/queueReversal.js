import LLStack from '../chapter04/linkedListStack.js';

// Problem-1 Give an algorithm for reversing a queue Q. To access the queue, you are only allowed to use the methods of queue ADT.
function QueueReversal(queue) {
  const stack = new LLStack();
  while (!queue.isEmpty()) {
    stack.pushInStack(queue.deQueue());
  }
  while (!stack.isEmpty()) {
    queue.enQueue(stack.popFromStack());
  }
  return queue;
}

export default QueueReversal;
