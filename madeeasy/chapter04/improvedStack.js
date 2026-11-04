import LLStack from './linkedListStack.js';

// Problem-7 For the Problem-6 is it possible to improve the space complexity?
function improvedStack() {
  let minTop;
  let elementTop;
  const elementStack = new LLStack();
  const minStack = new LLStack();
  return {
    pushInImprovedStack(data) {
      elementStack.pushInStack(data);
      if (minStack.isEmpty() || minStack.top() >= data) {
        minStack.pushInStack(data);
      }
    },
    popFromImprovedStack() {
      if (elementStack.isEmpty()) {
        console.log('Improved stack is empty');
        return;
      }
      minTop = minStack.top();
      elementTop = elementStack.top();
      if (minTop === elementTop) {
        minStack.popFromStack();
      }
      return elementStack.popFromStack();
    },
    getMinimum() {
      return minStack.top();
    },
    getTop() {
      return elementStack.top();
    },
  };
}

export default improvedStack;
