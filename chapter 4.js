/*jslint white: true */
//4.6 Implementation
//Simple Array Implementation of Stack
var ArrayStack = function (size) {
	//private
	var top =  -1,
		capacity = size,
		array =	[];
	return {
		isEmpty: function () {
			return (top === -1);
		},
		isStackFull: function () {
			return (top === (capacity - 1));
		},
		pushInStack: function (data) {
			if(this.isStackFull()) {
				console.error("Stack Overflow");
			} else {
				array[++top] = data;
			}
		},
		popFromStack: function () {
			if(this.isEmpty()) {
				console.error("Stack is Empty");
				return;
			}
			return array[top--];
		}
	};
};

//Dynamic Array Implementation of Stack
//In JavaScript, array is already dynamic in nature
var DynArrayStack = function (size) {
	//private
	var top = -1,
		capacity = size,
		array = [];
	return {
		isEmpty: function () {
			return top === -1;
		},
		isStackFull: function () {
			return top === capacity - 1;
		},
		doubleStack: function () {
			capacity *= 2;
		},
		deleteStack: function () {
			top = -1;
		},
		pushInStack: function (data) {
			if (this.isStackFull()) {
				this.doubleStack();
			}
			array[++top] = data;
		},
		popFromStack: function () {
			if (this.isEmpty()) {
				console.error("Stack is Empty");
				return;
			}
			return array[top--];
		}
	};
};

//Linked list implementation of Stack
var ListNode = function() {
	return {
		data: null,
		next: null
	};
};

var LLStack = function () {
	var headNode = new ListNode();
	return {
		top: function () {
			if (headNode === null){
				return null;
			}
			return headNode.data;
		},
		isEmpty: function () {
			if (headNode === null)
				return true;
			return false;
		},
		deleteStack: function () {
			headNode = null;
		},
		pushInStack: function (data) {
			if (headNode === null) {
				headNode.data = data;
				headNode = new ListNode();
			} else if (headNode.data === null) {
				headNode.data = data;
			} else {
				var llNode = new ListNode();
				llNode.data = data;
				llNode.next = headNode;
				headNode = llNode;
			}
		},
		popFromStack: function () {
			if (headNode === null){
				console.error("Stack is Empty");
				return;
			}
			var data = headNode.data;
			headNode = headNode.next;
			return data;
		}
	};
};

//----------
//Problem-2 Infix to Postfix conversion using stack

var infix2postfix = function (infix) {
	var bwParnt, postfix = "",
		operator = new LLStack();
	for (var i = 0; i < infix.length; i++) {
		if ((infix.charCodeAt(i) >= 32 && infix.charCodeAt(i) <= 47) ||
			(infix.charCodeAt(i) >= 58 && infix.charCodeAt(i) <= 64) ||
			(infix.charCodeAt(i) >= 91 && infix.charCodeAt(i) <= 96) ||
			(infix.charCodeAt(i) >= 123 && infix.charCodeAt(i) <= 126)) {
			if (infix[i] === ")") {
				bwParnt = operator.popFromStack();
				while (bwParnt !== "(") {
					postfix += bwParnt;
					bwParnt = operator.popFromStack();
				}
			} else {
				operator.pushInStack(infix[i]);
			}
		} else {
			postfix += infix[i];
		}
	}
	while (!operator.isEmpty()) {
		postfix += operator.popFromStack();
	}
	return postfix;
};

//----------
//Problem-4 Postfix evaluation using stack

var postfixEvaluation = function (postfix) {
	var operand = new LLStack(),
		eval, operand1, operand2;
	for(var i = 0; i < postfix.length; i++) {
		if ((postfix.charCodeAt(i) >= 32 && postfix.charCodeAt(i) <= 47) ||
			(postfix.charCodeAt(i) >= 58 && postfix.charCodeAt(i) <= 64) ||
			(postfix.charCodeAt(i) >= 91 && postfix.charCodeAt(i) <= 96) ||
			(postfix.charCodeAt(i) >= 123 && postfix.charCodeAt(i) <= 126)) {
			operand1 = parseInt(operand.popFromStack(), 10);
			operand2 = parseInt(operand.popFromStack(), 10);
			switch (postfix[i]) {
				case '+':
					eval = operand2 + operand1;
					break;
				case '-':
					eval = operand2 - operand1;
					break;
				case '*':
					eval = operand2 * operand1;
					break;
				case '/':
					eval = operand2 / operand1;
					break;
			}
			operand.pushInStack(eval);
		}
		else {
			operand.pushInStack(postfix[i]);
		}
	}
	return operand.popFromStack();
};

//----------
//Problem-5 Infix evaluation using 2 stacks

var infixEvaluation = function (infix) {
	var bwParnt, eval,
		operand = new LLStack(),
		operator = new LLStack();
	for(var i = 0; i < infix.length; i++) {
		if ((infix.charCodeAt(i) >= 32 && infix.charCodeAt(i) <= 47) ||
			(infix.charCodeAt(i) >= 58 && infix.charCodeAt(i) <= 64) ||
			(infix.charCodeAt(i) >= 91 && infix.charCodeAt(i) <= 96) ||
			(infix.charCodeAt(i) >= 123 && infix.charCodeAt(i) <= 126)) {
			if (infix[i] === ")") {
				bwParnt = oprator.popFromStack();
				while (bwParnt !== "(") {
					var operand1 = parseInt(operand.popFromStack(), 10),
						operand2 = parseInt(operand.popFromStack(), 10);
					switch (operator.popFromStack()) {
						case '+':
							eval = operand2 + operand1;
							break;
						case '-':
							eval = operand2 - operand1;
							break;
						case '*':
							eval = operand2 * operand1;
							break;
						case '/':
							eval = operand2 / operand1;
							break;
					}
					operand.pushInStack(eval);
					bwParnt = operator.popFromStack();
				}
			} else {
				operator.pushInStack(infix[i]);
			}
		}
		else {
			operand.pushInStack(infix[i]);
		}
	}
	while (!operator.isEmpty()) {
		var operand1 = parseInt(operand.popFromStack(), 10),
			operand2 = parseInt(operand.popFromStack(), 10);
		switch (operator.popFromStack()) {
			case '+':
				eval = operand2 + operand1;
				break;
			case '-':
				eval = operand2 - operand1;
				break;
			case '*':
				eval = operand2 * operand1;
				break;
			case '/':
				eval = operand2 / operand1;
				break;
		}
		operand.pushInStack(eval);
	}
	return operand.popFromStack();
};