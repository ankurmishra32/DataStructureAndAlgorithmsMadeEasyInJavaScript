// 4.6 Implementation
// Simple Array Implementation of Stack
function ArrayStack(size) {
  // private
  let top = -1;
  const capacity = size;
  const array = [];
  return {
    isEmpty() {
      return (top === -1);
    },
    isStackFull() {
      return (top === (capacity - 1));
    },
    pushInStack(data) {
      if (this.isStackFull()) {
        console.error('Stack Overflow');
      } else {
        array[++top] = data;
      }
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

export default ArrayStack;
