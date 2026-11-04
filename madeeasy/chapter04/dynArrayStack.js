// Dynamic Array Implementation of Stack
// In JavaScript, array is already dynamic in nature
function DynArrayStack(size) {
  // private
  let top = -1;
  let capacity = size;
  const array = [];
  return {
    isEmpty() {
      return top === -1;
    },
    isStackFull() {
      return top === capacity - 1;
    },
    doubleStack() {
      capacity *= 2;
    },
    deleteStack() {
      top = -1;
    },
    pushInStack(data) {
      if (this.isStackFull()) {
        this.doubleStack();
      }
      array[++top] = data;
    },
    popFromStack() {
      if (this.isEmpty()) {
        console.error('Stack is Empty');
        return;
      }
      return array[top--];
    },
  };
}

export default DynArrayStack;
