// Problem-15 How do we implement 3 stack in one array?
function arrayWithThreeStack(size) {
  const dataArray = [];
  let topOne = -1;
  let topTwo = size;
  let topThree = size / 2;
  let baseThree = topThree;

  function stack3IsLeftShiftable() {
    if (topOne + 1 < baseThree) {
      return true;
    }
    return false;
  }

  function shiftStack3Left() {
    for (let i = baseThree - 1; i < topThree; i++) {
      dataArray[i] = dataArray[i + 1];
    }
    console.log('Left shifted');
    dataArray[topThree--] = null;
    baseThree--;
  }

  function stack3IsRightShiftable() {
    if (topTwo - 1 > topThree) {
      return true;
    }
    return false;
  }

  function shiftStack3Right() {
    for (let i = topThree + 1; i > baseThree; i--) {
      dataArray[i] = dataArray[i - 1];
    }
    console.log('Right shifted');
    dataArray[baseThree++] = null;
    topThree++;
  }

  return {
    pushInStack(stackId, data) {
      if (stackId === 1) {
        if (topOne + 1 === baseThree) {
          if (stack3IsRightShiftable()) {
            shiftStack3Right();
            dataArray[++topOne] = data;
          } else {
            console.error('Stack 1 is reached its maximum limit');
            return;
          }
        } else {
          dataArray[++topOne] = data;
        }
      }
      if (stackId === 2) {
        if (topTwo - 1 === topThree) {
          if (stack3IsLeftShiftable()) {
            shiftStack3Left();
            dataArray[--topTwo] = data;
          } else {
            console.error('Stack 2 is reached its maximum limit');
            return;
          }
        } else {
          dataArray[--topTwo] = data;
        }
      }
      if (stackId === 3) {
        if (topTwo - 1 === topThree) {
          if (stack3IsLeftShiftable()) {
            shiftStack3Left();
            dataArray[++topThree] = data;
          } else {
            console.error('Stack 3 is reached its maximum limit');
          }
        } else {
          dataArray[++topThree] = data;
        }
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
      } if (stackId === 3) {
        if (topThree === baseThree) {
          console.error('Third Stack is empty');
          return;
        }
        const top = dataArray[topThree];
        if (topThree > baseThree) {
          dataArray[topThree--] = null;
        }
        if (topThree === baseThree) {
          dataArray[topThree] = null;
        }
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
      } if (stackId === 3) {
        if (topThree === baseThree) {
          console.error('Third Stack is empty');
          return;
        }
        return dataArray[topThree];
      } return null;
    },

    isEmpty(stackId) {
      if (stackId === 1) {
        return topOne === -1;
      } if (stackId === 2) {
        return topTwo === size;
      } if (stackId === 3) {
        return topThree === baseThree;
      } return null;
    },
  };
}

export default arrayWithThreeStack;
