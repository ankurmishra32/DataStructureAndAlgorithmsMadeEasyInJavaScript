// Problem-14 How do we implement 2 stack using only one array? Our stack routines shoulf not indicate an exception
// unless every slot in the array is used?
function arrayWithTwoStack(size) {
  const dataArray = [];
  let topOne = -1;
  let topTwo = size;
  return {
    pushInStack(stackId, data) {
      if (topTwo === topOne + 1) {
        console.error('Array is full');
        return;
      }
      if (stackId === 1) {
        dataArray[++topOne] = data;
      } else if (stackId === 2) {
        dataArray[--topTwo] = data;
      }
    },

    popFromStack(stackId) {
      if (stackId === 1) {
        if (topOne === -1) {
          console.error('First Stack is empty');
          return;
        }
        const top = dataArray[topOne];
        dataArray[topOne--] = null;
        return top;
      } if (stackId === 2) {
        if (topTwo === size) {
          console.error('Second Stack is empty');
          return;
        }
        const top = dataArray[topTwo];
        dataArray[topTwo++] = null;
        return top;
      } return null;
    },

    top(stackId) {
      if (stackId === 1) {
        if (topOne === -1) {
          console.error('First Stack is empty');
          return;
        }
        return dataArray[topOne];
      } if (stackId === 2) {
        if (topTwo === size) {
          console.error('Second Stack is empty');
          return;
        }
        return dataArray[topTwo];
      } return null;
    },

    isEmpty(stackId) {
      if (stackId === 1) {
        return topOne === -1;
      } if (stackId === 2) {
        return topTwo === size;
      } return null;
    },
  };
}

export default arrayWithTwoStack;
