function isOperator(ch) {
  return ch === '+' || ch === '-' || ch === '*' || ch === '/' || ch === '(' || ch === ')';
}

function precedence(ch) {
  switch (ch) {
    case '+':
    case '-':
      return 1;
    case '*':
    case '/':
      return 2;
    default:
      return 0;
  }
}

function applyOperator(operand, operator) {
  const operand1 = parseInt(operand.popFromStack(), 10);
  const operand2 = parseInt(operand.popFromStack(), 10);
  let result;
  switch (operator) {
    case '+':
      result = operand2 + operand1;
      break;
    case '-':
      result = operand2 - operand1;
      break;
    case '*':
      result = operand2 * operand1;
      break;
    case '/':
      result = operand2 / operand1;
      break;
    default:
      console.error("Doesn't support operator other than +, -, *, /");
      break;
  }
  operand.pushInStack(result);
  return result;
}

export { isOperator, precedence, applyOperator };
