import LLStack from './linkedListStack.js';
import { isOperator, precedence } from './expressionHelpers.js';

// Problem-2 Infix to Postfix conversion using stack
function infix2postfix(infix) {
  let postfix = '';
  const operator = new LLStack();
  for (let i = 0; i < infix.length; i++) {
    const ch = infix[i];
    if (ch === ' ') {
      continue;
    }
    if (ch === '(') {
      operator.pushInStack(ch);
    } else if (ch === ')') {
      let top = operator.popFromStack();
      while (top !== '(' && top !== undefined) {
        postfix += top;
        top = operator.popFromStack();
      }
    } else if (isOperator(ch)) {
      while (!operator.isEmpty()) {
        const top = operator.top();
        if (top === '(' || precedence(top) < precedence(ch)) {
          break;
        }
        postfix += operator.popFromStack();
      }
      operator.pushInStack(ch);
    } else {
      postfix += ch;
    }
  }
  while (!operator.isEmpty()) {
    postfix += operator.popFromStack();
  }
  return postfix;
}

export default infix2postfix;
