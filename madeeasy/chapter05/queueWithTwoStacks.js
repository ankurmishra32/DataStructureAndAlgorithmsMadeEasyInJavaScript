import LLStack from '../chapter04/linkedListStack.js';

// Problem-2 How to implement a queue using two stacks?
function QueueWithTwoStacks() {
  const stack1 = new LLStack();
  const stack2 = new LLStack();

  return {
    isEmpty() {
      if (stack2.isEmpty()) {
        while (!stack1.isEmpty()) {
          stack2.pushInStack(stack1.popFromStack());
        }
      }
      return stack2.isEmpty();
    },
    enQueue(data) {
      stack1.pushInStack(data);
    },
    deQueue() {
      if (this.isEmpty()) {
        console.error('Queue Empty');
        return;
      }
      return stack2.popFromStack();
    },
  };
}

export default QueueWithTwoStacks;
