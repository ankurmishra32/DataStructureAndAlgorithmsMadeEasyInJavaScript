import LLQueue from './linkedListQueue.js';

// Problem-3 Show how to efficiently implement one stack using two queues.
function StackWithTwoQueues() {
  const queue1 = new LLQueue();
  const queue2 = new LLQueue();

  return {
    pushInStack(data) {
      if (queue1.isEmpty()) {
        queue2.enQueue(data);
      } else {
        queue1.enQueue(data);
      }
    },
    popFromStack() {
      let i = 0;
      let size;
      if (queue2.isEmpty()) {
        size = queue1.getQueueSize();
        while (i++ < size - 1) {
          queue2.enQueue(queue1.deQueue());
        }
        return queue1.deQueue();
      }
      size = queue2.getQueueSize();
      while (i++ < size - 1) {
        queue1.enQueue(queue2.deQueue());
      }
      return queue2.deQueue();
    },
  };
}

export default StackWithTwoQueues;
