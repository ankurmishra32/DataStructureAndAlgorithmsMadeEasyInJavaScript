import LLStack from './linkedListStack.js';

// Problem-4 Postfix evaluation using stack
function postfixEvaluation(postfix) {
  let i;
  const operand = new LLStack();
  let evaluate;
  let operand1;
  let operand2;
  for (i = 0; i < postfix.length; i++) {
    if ((postfix.charCodeAt(i) >= 32 && postfix.charCodeAt(i) <= 47)
            || (postfix.charCodeAt(i) >= 58 && postfix.charCodeAt(i) <= 64)
            || (postfix.charCodeAt(i) >= 91 && postfix.charCodeAt(i) <= 96)
            || (postfix.charCodeAt(i) >= 123 && postfix.charCodeAt(i) <= 126)) {
      operand1 = parseInt(operand.popFromStack(), 10);
      operand2 = parseInt(operand.popFromStack(), 10);
      switch (postfix[i]) {
        case '+':
          evaluate = operand2 + operand1;
          break;
        case '-':
          evaluate = operand2 - operand1;
          break;
        case '*':
          evaluate = operand2 * operand1;
          break;
        case '/':
          evaluate = operand2 / operand1;
          break;
        default:
          console.error("Doesn't support oprand other then +, -, *, / ");
          break;
      }
      operand.pushInStack(evaluate);
    } else {
      operand.pushInStack(postfix[i]);
    }
  }
  return operand.popFromStack();
}

export default postfixEvaluation;
