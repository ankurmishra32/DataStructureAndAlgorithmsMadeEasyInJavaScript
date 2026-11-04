import LLStack from './linkedListStack.js';

// Problem-10 Can we solve Problem-8 using stacks?
function isPalindromeUsingStack(inputStr) {
  let i = 0;
  const stack = new LLStack();
  if (inputStr.indexOf('X') === -1) {
    console.error('Middle marker X is missing');
    return false;
  }
  while (inputStr[i] !== 'X') {
    stack.pushInStack(inputStr[i++]);
  }
  i++;
  while (i < inputStr.length) {
    if (stack.isEmpty()) {
      return false;
    }
    if (inputStr[i++] !== stack.popFromStack()) {
      return false;
    }
  }
  return true;
}

export default isPalindromeUsingStack;
