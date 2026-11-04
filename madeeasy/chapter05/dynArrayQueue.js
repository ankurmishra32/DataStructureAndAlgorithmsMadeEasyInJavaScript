// Dynamic Circular Array Implementation of Queue
function DynArrayQueue(size) {
  // private
  let front = -1;
  let rear = -1;
  let capacity = size;
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
    resizeQueue() {
      const initCapacity = capacity;
      capacity *= 2;
      if (rear < front) {
        for (let i = 0; i < front; i++) {
          array[i + initCapacity] = array[i];
          array[i] = undefined;
        }
        rear += initCapacity;
      }
    },
    enQueue(data) {
      if (this.isFull()) {
        this.resizeQueue();
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

export default DynArrayQueue;
