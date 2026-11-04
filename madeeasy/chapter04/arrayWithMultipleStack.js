// Problem-17 Multiple (m) stack in one array: As similar to Problem-15, what if we want to implement m stacks in one array?
function arrayWithMultipleStack(size, m) {
  const dataArray = [];
  const base = [];
  let top = [];

  if (size < m) {
    console.error(`Size <${m} is not possible`);
    return;
  }

  return {
    pushInStack(stackId, data) {
      for (let i = 0; i < size; i++) {
        if (top[i] === base[i + 1]) {
          // Print ith Stack is full and does the shifting
          // TO-DO
        } else {
          dataArray[++top[i]] = data;
        }
      }
    },

    popFromStack(stackId) {
      for (let i = 0; i < size; i++) {
        if (top[i] === base[i]) {
          console.error('Stack is empty');
          return;
        }
        top = dataArray[top[i]];
        dataArray[top[i]--] = null;
        return top;
      }
    },

    top(stackId) {
      // TO-DO
    },

    isEmpty(stackId) {
      // TO-DO
    },
  };
}

// Problem-18 Consider an empty stack of integers. Let the numbers 1,2,3,4,5,6 be pushed on to this stack only in the order they appear from left to right.
// Let S indicates a push and X indicates a pop operation. Can the be permuted in to the order? If so, then give the order string of operation.

export default arrayWithMultipleStack;
