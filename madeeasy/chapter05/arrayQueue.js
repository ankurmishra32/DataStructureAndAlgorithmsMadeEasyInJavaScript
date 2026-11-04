// 5.6 Implementation
// Simple Circular Array Implementation of Queue
function ArrayQueue(size) {
  // private
  let front = -1;
  let rear = -1;
  const capacity = size;
  const array = [];
  // closure
  return {
    isEmpty() {
      return (front === -1);
    },
    isFull() {
      return ((rear + 1) % capacity === front);
    },
    getQueueSize() {
      if (front === -1) {
        return 0;
      }
      return ((rear - front + capacity) % capacity) + 1;
    },
    enQueue(data) {
      if (this.isFull()) {
        console.error('Queue overflow');
        return;
      }
      rear = (rear + 1) % capacity;
      array[rear] = data;
      if (front === -1) {
        front = rear;
      }
    },
    deQueue() {
      if (this.isEmpty()) {
        console.error('Queue Empty');
        return;
      }
      const data = array[front];
      if (front === rear) {
        // when only one element left in queue
        front = -1;
        rear = -1;
      } else {
        front = (front + 1) % capacity;
      }
      return data;
    },
  };
}

export default ArrayQueue;
