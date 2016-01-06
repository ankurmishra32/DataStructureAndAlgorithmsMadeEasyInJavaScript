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
			if (headNode === null  || headNode.data === null)
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


//----------
//Problem-6 How to design a stack such that getMinimum() should be O(1)?

var advancedStack = function () {
	var elementStack = new LLStack(),
		minStack = new LLStack();
	return {
		pushInAdvancedStack: function (data) {
			elementStack.pushInStack(data);
			if (minStack.isEmpty() || minStack.top() >= data) {
				minStack.pushInStack(data);
			} else {
				minStack.pushInStack(minStack.top());
			}
		},
		popFromAdvancedStack: function () {
			if (elementStack.isEmpty()) {
				console.error("Advanced stack is empty");
				return;
			}
			minStack.popFromStack();
			return elementStack.popFromStack();
		},
		getMinimum: function () {
			return minStack.top();
		},
		getTop: function () {
			return elementStack.top();
		}
	};
};

//----------
//Problem-7 For the Problem-6 is it possible to improve the space complexity?

var improvedStack = function () {
	var elementStack = new LLStack(),
		minStack = new LLStack();
	return {
		pushInImprovedStack: function (data) {
			elementStack.pushInStack(data);
			if (minStack.isEmpty() || minStack.top() >= data) {
				minStack.pushInStack(data);
			}
		},
		popFromImprovedStack: function () {
			if (elementStack.isEmpty()) {
				console.log("Improved stack is empty");
				return;
			}
			var minTop = minStack.top();
			var elementTop = elementStack.top();
			if (minTop === elementTop) {
				minStack.popFromStack();
			}
			return elementStack.popFromStack();
		},
		getMinimum: function () {
			return minStack.top();
		},
		getTop: function () {
			return elementStack.top();
		}
	};
};

//----------
//Problem-8 Given an array of characters formed with a's and b's. The string is marked with special character X
//which represents the middle of the list. Check whether the string is palindrome or not?

var isPalindrome = function (inputStr) {
	var i = 0, j = inputStr.length - 1;
	// console.log(inputStr[1]);
	while ((i < j) && (inputStr[i] === inputStr[j])) {
		i++;
		j--;
	}
	if (i < j) {
		console.log("Not a Palindrome");
		return 0;
	} else {
		console.log("Palindrome");
		return 1;
	}
};

//----------
//Problem-10 Can we solve Problem-8 using stacks?

var isPalindromeUsingStack = function (inputStr) {
	var i = 0, stack = new LLStack();
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
};

//----------
//Problem-11 Given a stack, how to reverse the contents of stacks by using only stack operations (push and pop)?

var stackReversal = {
	reverseStack: function (stack) {
		if (stack.isEmpty()) return;
		var temp = stack.popFromStack();
		this.reverseStack(stack);
		this.insertAtBottom(stack, temp);
	},
	insertAtBottom: function (stack, data) {
		if (stack.isEmpty()) {
			stack.pushInStack(data);
			return;
		}
		var temp = stack.popFromStack();
		this.insertAtBottom(stack, data);
		stack.pushInStack(temp);
	}
};

//----------
//Problem-14 How do we implement 2 stack using only one array? Our stack routines shoulf not indicate an exception
//unless every slot in the array is used?

var arrayWithTwoStack = function (size) {
	var dataArray = [],
		topOne = -1,
		topTwo = size;
	return {
		pushInStack: function (stackId, data) {
			if (topTwo === topOne + 1) {
				console.error("Array is full");
				return;
			}
			if (stackId === 1) {
				dataArray[++topOne] = data;
			} else if (stackId === 2) {
				dataArray[--topTwo] = data;
			} else return;
		},

		popFromStack: function (stackId) {
			if (stackId === 1) {
				if (topOne === -1) {
					console.error("First Stack is empty");
					return;
				}
				var top = dataArray[topOne];
				dataArray[topOne--] = null;
				return top;
			} else if (stackId === 2) {
				if (topTwo === size) {
					console.error("Second Stack is empty");
					return;
				}
				var top = dataArray[topTwo];
				dataArray[topTwo++] = null;
				return top;
			} else return null;
		},

		top: function (stackId) {
			if (stackId === 1) {
				if (topOne === -1) {
					console.error("First Stack is empty");
					return;
				}
				return dataArray[topOne];
			} else if (stackId === 2) {
				if (topTwo === size) {
					console.error("Second Stack is empty");
					return;
				}
				return dataArray[topTwo];
			} else return null;
		},

		isEmpty: function (stackId) {
			if (stackId === 1) {
				return topOne === -1;
			} else if (stackId === size) {
				return topTwo === size;
			} else return null;
		}
	};
};

//----------
//Problem-15 How do we implement 3 stack in one array?

var arrayWithThreeStack = function (size) {
	var dataArray = [],
		topOne = -1,
		topTwo = size,
		topThree = size/2,
		baseThree = topThree;
	return {
		pushInStack: function (stackId, data) {
			if (stackId === 1) {
				if (topOne + 1 === baseThree) {
					if (this.stack3IsRightShiftable()) {
						this.shiftStack3Right();
						dataArray[++topOne] = data;
					} else {
						console.error("Stack 1 is reached its maximum limit");
						return;
					}
				} else {
					dataArray[++topOne] = data;
				}
			}
			if (stackId === 2) {
				if (topTwo - 1 === topThree) {
					if (this.stack3IsLeftShiftable()) {
						this.shiftStack3Left();
						dataArray[--topTwo] = data;
					} else {
						console.error("Stack 2 is reached its maximum limit");
						return;
					}
				} else {
					dataArray[--topTwo] = data;
				}
			}
			if (stackId === 3) {
				if (topTwo - 1 === topThree) {
					if (this.stack3IsLeftShiftable()) {
						this.shiftStack3Left();
						dataArray[++topThree] = data;
					} else {
						console.error("Stack 3 is reached its maximum limit");
						return;
					}
				} else {
					dataArray[++topThree] = data;
				}
			}
		},

		popFromStack: function (stackId) {
			if (stackId === 1) {
				if (topOne === -1) {
					console.error("First Stack is empty");
					return;
				}
				var top = dataArray[topOne];
				dataArray[topOne--] = null;
				return top;
			} else if (stackId === 2) {
				if (topTwo === size) {
					console.error("Second Stack is empty");
					return;
				}
				var top = dataArray[topTwo];
				dataArray[topTwo++] = null;
				return top;
			} else if (stackId === 3) {
				if (topThree === size && dataArray[topThree] === null) {
					console.error("Third Stack is empty");
					return;
				}
				var top = dataArray[topThree];
				if (topThree >  baseThree) {
					dataArray[topThree--] = null;
				}
				if (topThree ===  baseThree) {
					dataArray[topThree] = null;
				}
				return top;
			} else return null;
		},

		top: function (stackId) {
			if (stackId === 1) {
				if (topOne === -1) {
					console.error("First Stack is empty");
					return;
				}
				return dataArray[topOne];
			} else if (stackId === 2) {
				if (topTwo === size) {
					console.error("Second Stack is empty");
					return;
				}
				return dataArray[topTwo];
			} else if (stackId === 3) {
				if (topThree === baseThree && dataArray[baseThree] === null) {
					console.error("Third Stack is empty");
					return;
				}
				return dataArray[topThree];
			} else return null;
		},

		isEmpty: function (stackId) {
			if (stackId === 1) {
				return topOne === -1;
			} else if (stackId === size) {
				return topTwo === size;
			} else if (stackId === 3) {
				return (topThree === baseThree && dataArray[baseThree] === null);
			} else return null;
		},

		stack3IsLeftShiftable: function () {
			if (topOne + 1 < baseThree) {
				return true;
			}
			return false;
		},

		shiftStack3Left: function () {
			for (var i = baseThree - 1; i < topThree; i++) {
				dataArray[i] = dataArray[i+1];
			}
			console.log("Left shifted");
			dataArray[topThree--] = null;
			baseThree--;
		},

		stack3IsRightShiftable: function () {
			if (topTwo - 1 > topThree) {
				return true;
			}
			return false;
		},

		shiftStack3Right: function () {
			for (var i = topThree + 1; i > baseThree; i--) {
				dataArray[i] = dataArray[i-1];
			}
			console.log("Right shifted");
			dataArray[baseThree++] = null;
			topThree++;
		}
	};
};