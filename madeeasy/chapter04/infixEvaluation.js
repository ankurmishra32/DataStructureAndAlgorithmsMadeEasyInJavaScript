import LLStack from './linkedListStack.js';
import { isOperator, precedence, applyOperator } from './expressionHelpers.js';

// Problem-5 Infix evaluation using 2 stacks
function infixEvaluation(infix) {
  const operand = new LLStack();
  const operator = new LLStack();
  for (let i = 0; i < infix.length; i++) {
    const ch = infix[i];
    if (ch === ' ') {
      continue;
    }
    if (ch === '(') {
      operator.pushInStack(ch);
    } else if (ch === ')') {
      while (!operator.isEmpty() && operator.top() !== '(') {
        applyOperator(operand, operator.popFromStack());
      }
      operator.popFromStack();
    } else if (isOperator(ch)) {
      while (!operator.isEmpty()) {
        const top = operator.top();
        if (top === '(' || precedence(top) < precedence(ch)) {
          break;
        }
        applyOperator(operand, operator.popFromStack());
      }
      operator.pushInStack(ch);
    } else {
      operand.pushInStack(ch);
    }
  }
  while (!operator.isEmpty()) {
    applyOperator(operand, operator.popFromStack());
  }
  return parseInt(operand.popFromStack(), 10);
}

export default infixEvaluation;
