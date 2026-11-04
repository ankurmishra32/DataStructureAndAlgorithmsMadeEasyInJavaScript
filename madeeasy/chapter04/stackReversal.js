// Problem-11 Given a stack, how to reverse the contents of stacks by using only stack operations (push and pop)?
function stackReversal() {
  // private
  function insertAtBottom(stack, data) {
    if (stack.isEmpty()) {
      stack.pushInStack(data);
      return;
    }
    const temp = stack.popFromStack();
    insertAtBottom(stack, data);
    stack.pushInStack(temp);
  }
  return {
    // public
    reverseStack(stack) {
      if (stack.isEmpty()) return;
      const temp = stack.popFromStack();
      this.reverseStack(stack);
      insertAtBottom(stack, temp);
    },
  };
}

export default stackReversal;
