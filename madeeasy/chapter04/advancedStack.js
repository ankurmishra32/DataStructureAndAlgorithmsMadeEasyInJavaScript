import LLStack from './linkedListStack.js';

// Problem-6 How to design a stack such that getMinimum() should be O(1)?
function advancedStack() {
  const elementStack = new LLStack();
  const minStack = new LLStack();
  return {
    pushInAdvancedStack(data) {
      elementStack.pushInStack(data);
      if (minStack.isEmpty() || minStack.top() >= data) {
        minStack.pushInStack(data);
      } else {
        minStack.pushInStack(minStack.top());
      }
    },
    popFromAdvancedStack() {
      if (elementStack.isEmpty()) {
        console.error('Advanced stack is empty');
        return;
      }
      minStack.popFromStack();
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

export default advancedStack;
