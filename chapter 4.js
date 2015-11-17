/*jslint white: true */
//4.6 Implementation
//Simple Array Implementation of Stack
var ArrayStack = function () {
	return {
		top: -1,
		capacity: 1,
		array: [],

		isEmpty: function () {
			return (this.top === -1);
		},
		isStackFull: function () {
			return (this.top === (this.capacity - 1));
		},
		pushInStack: function (data) {
			if(this.isStackFull()) {
				console.log("Stack Overflow");
			} else {
				this.array[++(this.top)] = data;
			}
		},
		popFromStack: function () {
			if(this.isEmpty()) {
				console.log("Stack is Empty");
				return;
			}
			return this.array[this.top--];
		}
	};
};

//Dynamic Array Implementation of Stack
//In JavaScript, array is already dynamic in nature
var DynArrayStack = function () {
	return {
		top: -1,
		capacity: 1,
		array: [],

		isEmpty: function(){
			return (this.top === -1);
		},
		isStackFull: function(){
			return (this.top === (this.capacity - 1));
		},
		doubleStack: function(){
			this.capacity *= 2;
		},
		deleteStack: function(){
			this.top = -1;
		},
		pushInStack: function(data){
			if(this.isStackFull()){
				this.doubleStack();
			}
			this.array[++(this.top)]=data;
		},
		popFromStack: function(){
			if(this.isEmpty()){
				console.log("Stack is Empty");
				return;
			}
			return this.array[this.top--];
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
	return {
		headNode: new ListNode(),
		top: function(){
			if(this.headNode === null){
				return null;
			}
			return this.headNode.data;
		},
		isEmpty: function(){
			if(this.headNode === null)
				return true;
			return false;
		},
		deleteStack: function(){
			this.headNode = null;
		},
		pushInStack: function(data){
			if(this.headNode === null) {
				this.headNode = new ListNode();
				this.headNode.data = data;
			} else if(this.headNode.data === null) {
				this.headNode.data = data;
			} else {
				var llNode = new ListNode();
				llNode.data = data;
				llNode.next = this.headNode;
				this.headNode = llNode;
			}
		},
		popFromStack: function(){
			if(this.headNode === null){
				console.log("Stack is Empty");
				return;
			}
			var data = this.headNode.data;
			this.headNode = this.headNode.next;
			return data;
		}
	};
};

//----------
//Problem-2 Infix to Postfix conversion using stack

var infix2postfix = function (infix) {
	var bwParnt, postfix = "",
		operator = new LLStack();
	for(var i = 0; i < infix.length; i++) {
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
		}
		else {
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