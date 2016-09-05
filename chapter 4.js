/*jslint white: true */
//4.6 Implementation
//Simple Array Implementation of Stack
function ArrayStack(size) {
    //private
    var top = -1,
        capacity = size,
        array = [];
    return {
        isEmpty: function() {
            return (top === -1);
        },
        isStackFull: function() {
            return (top === (capacity - 1));
        },
        pushInStack: function(data) {
            if (this.isStackFull()) {
                console.error("Stack Overflow");
            } else {
                array[++top] = data;
            }
        },
        popFromStack: function() {
            if (this.isEmpty()) {
                console.error("Stack is Empty");
                return;
            }
            return array[top--];
        }
    };
}

//Dynamic Array Implementation of Stack
//In JavaScript, array is already dynamic in nature
function DynArrayStack(size) {
    //private
    var top = -1,
        capacity = size,
        array = [];
    return {
        isEmpty: function() {
            return top === -1;
        },
        isStackFull: function() {
            return top === capacity - 1;
        },
        doubleStack: function() {
            capacity *= 2;
        },
        deleteStack: function() {
            top = -1;
        },
        pushInStack: function(data) {
            if (this.isStackFull()) {
                this.doubleStack();
            }
            array[++top] = data;
        },
        popFromStack: function() {
            if (this.isEmpty()) {
                console.error("Stack is Empty");
                return;
            }
            return array[top--];
        }
    };
}

//Linked List
function ListNode() {
    var data = null,
        next = null;

    //closure
    return {
        setData: function(val) {
            data = val;
        },
        getData: function() {
            return data;
        },
        setNext: function(node) {
            next = node;
        },
        getNext: function() {
            return next;
        }
    };
}

//Linked list implementation of Stack
function LLStack() {
    var temp, llNode,
        headNode = new ListNode();

    return {
        top: function() {
            if (!headNode) {
                return null;
            }
            return headNode.getData();
        },
        isEmpty: function() {
            if (!headNode || !headNode.getData())
                return true;
            return false;
        },
        deleteStack: function() {
            headNode = null;
        },
        pushInStack: function(data) {
            if (!headNode) {
                headNode = new ListNode();
                headNode.setData(data);
            } else if (!headNode.getData()) {
                headNode.setData(data);
            } else {
                llNode = new ListNode();
                llNode.setData(data);
                llNode.setNext(headNode);
                headNode = llNode;
            }
        },
        popFromStack: function() {
            if (headNode === null) {
                console.error("Stack is Empty");
                return;
            }
            temp = headNode.getData();
            headNode = headNode.getNext();
            return temp;
        }
    };
}

//----------
//Problem-2 Infix to Postfix conversion using stack
function infix2postfix(infix) {
    var i, bwParnt, postfix = "",
        operator = new LLStack();
    for (i = 0; i < infix.length; i++) {
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
}

//----------
//Problem-4 Postfix evaluation using stack
function postfixEvaluation(postfix) {
    var i, operand = new LLStack(),
        eval, operand1, operand2;
    for (i = 0; i < postfix.length; i++) {
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
        } else {
            operand.pushInStack(postfix[i]);
        }
    }
    return operand.popFromStack();
}

//----------
//Problem-5 Infix evaluation using 2 stacks
function infixEvaluation(infix) {
    var i, bwParnt, eval,
        operand1, operand2,
        operand = new LLStack(),
        operator = new LLStack();
    for (i = 0; i < infix.length; i++) {
        if ((infix.charCodeAt(i) >= 32 && infix.charCodeAt(i) <= 47) ||
            (infix.charCodeAt(i) >= 58 && infix.charCodeAt(i) <= 64) ||
            (infix.charCodeAt(i) >= 91 && infix.charCodeAt(i) <= 96) ||
            (infix.charCodeAt(i) >= 123 && infix.charCodeAt(i) <= 126)) {
            if (infix[i] === ")") {
                bwParnt = oprator.popFromStack();
                while (bwParnt !== "(") {
                    operand1 = parseInt(operand.popFromStack(), 10);
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
        } else {
            operand.pushInStack(infix[i]);
        }
    }
    while (!operator.isEmpty()) {
        operand1 = parseInt(operand.popFromStack(), 10);
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
}

//----------
//Problem-6 How to design a stack such that getMinimum() should be O(1)?
function advancedStack() {
    var elementStack = new LLStack(),
        minStack = new LLStack();
    return {
        pushInAdvancedStack: function(data) {
            elementStack.pushInStack(data);
            if (minStack.isEmpty() || minStack.top() >= data) {
                minStack.pushInStack(data);
            } else {
                minStack.pushInStack(minStack.top());
            }
        },
        popFromAdvancedStack: function() {
            if (elementStack.isEmpty()) {
                console.error("Advanced stack is empty");
                return;
            }
            minStack.popFromStack();
            return elementStack.popFromStack();
        },
        getMinimum: function() {
            return minStack.top();
        },
        getTop: function() {
            return elementStack.top();
        }
    };
}

//----------
//Problem-7 For the Problem-6 is it possible to improve the space complexity?
function improvedStack() {
    var minTop, elementTop,
        elementStack = new LLStack(),
        minStack = new LLStack();
    return {
        pushInImprovedStack: function(data) {
            elementStack.pushInStack(data);
            if (minStack.isEmpty() || minStack.top() >= data) {
                minStack.pushInStack(data);
            }
        },
        popFromImprovedStack: function() {
            if (elementStack.isEmpty()) {
                console.log("Improved stack is empty");
                return;
            }
            minTop = minStack.top();
            elementTop = elementStack.top();
            if (minTop === elementTop) {
                minStack.popFromStack();
            }
            return elementStack.popFromStack();
        },
        getMinimum: function() {
            return minStack.top();
        },
        getTop: function() {
            return elementStack.top();
        }
    };
}

//----------
//Problem-8 Given an array of characters formed with a's and b's. The string is marked with special character X
//which represents the middle of the list. Check whether the string is palindrome or not?
function isPalindrome(inputStr) {
    var i = 0, j = inputStr.length - 1;
    while ((i < j) && (inputStr[i] === inputStr[j])) {
        i++;
        j--;
    }
    if (i < j) {
        console.error("Not a Palindrome");
        return 0;
    } else {
        console.log("Palindrome");
        return 1;
    }
}

//----------
//Problem-10 Can we solve Problem-8 using stacks?
function isPalindromeUsingStack(inputStr) {
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
}

//----------
//Problem-11 Given a stack, how to reverse the contents of stacks by using only stack operations (push and pop)?
function stackReversal() {
    //private
    function insertAtBottom(stack, data) {
        if (stack.isEmpty()) {
            stack.pushInStack(data);
            return;
        }
        var temp = stack.popFromStack();
        this.insertAtBottom(stack, data);
        stack.pushInStack(temp);
    }
    return {
        //public
        reverseStack: function(stack) {
            if (stack.isEmpty()) return;
            var temp = stack.popFromStack();
            this.reverseStack(stack);
            insertAtBottom(stack, temp);
        }
    };
}

//----------
//Problem-14 How do we implement 2 stack using only one array? Our stack routines shoulf not indicate an exception
//unless every slot in the array is used?
function arrayWithTwoStack(size) {
    var dataArray = [],
        topOne = -1,
        topTwo = size;
    return {
        pushInStack: function(stackId, data) {
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

        popFromStack: function(stackId) {
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

        top: function(stackId) {
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

        isEmpty: function(stackId) {
            if (stackId === 1) {
                return topOne === -1;
            } else if (stackId === size) {
                return topTwo === size;
            } else return null;
        }
    };
}

//----------
//Problem-15 How do we implement 3 stack in one array?
function arrayWithThreeStack(size) {
    var dataArray = [],
        topOne = -1,
        topTwo = size,
        topThree = size / 2,
        baseThree = topThree;

    function stack3IsLeftShiftable() {
        if (topOne + 1 < baseThree) {
            return true;
        }
        return false;
    }

    function shiftStack3Left() {
        for (var i = baseThree - 1; i < topThree; i++) {
            dataArray[i] = dataArray[i + 1];
        }
        console.log("Left shifted");
        dataArray[topThree--] = null;
        baseThree--;
    }

    function stack3IsRightShiftable() {
        if (topTwo - 1 > topThree) {
            return true;
        }
        return false;
    }

    function shiftStack3Right() {
        for (var i = topThree + 1; i > baseThree; i--) {
            dataArray[i] = dataArray[i - 1];
        }
        console.log("Right shifted");
        dataArray[baseThree++] = null;
        topThree++;
    }

    return {
        pushInStack: function(stackId, data) {
            if (stackId === 1) {
                if (topOne + 1 === baseThree) {
                    if (stack3IsRightShiftable()) {
                        shiftStack3Right();
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
                    if (stack3IsLeftShiftable()) {
                        shiftStack3Left();
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
                    if (stack3IsLeftShiftable()) {
                        shiftStack3Left();
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

        popFromStack: function(stackId) {
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
                if (topThree > baseThree) {
                    dataArray[topThree--] = null;
                }
                if (topThree === baseThree) {
                    dataArray[topThree] = null;
                }
                return top;
            } else return null;
        },

        top: function(stackId) {
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

        isEmpty: function(stackId) {
            if (stackId === 1) {
                return topOne === -1;
            } else if (stackId === size) {
                return topTwo === size;
            } else if (stackId === 3) {
                return (topThree === baseThree && dataArray[baseThree] === null);
            } else return null;
        }
    };
}

//----------
//Problem-17 Multiple (m) stack in one array: As similar to Problem-15, what if we want to implement m stacks in one array?
function arrayWithMultipleStack(size, m) {
    var dataArray = [],
        base = [],
        top = [];

    if (size<m) {
        console.error("Size <"+m+" is not possible");
        return;
    }

    return {
        pushInStack: function(stackId, data) {
            if (top[i] === base[i+1]) {
                //Print ith Stack is full and does the shifting
                //TO-DO
            } else {
                dataArray[++top[i]] = data;
            }
        },

        popFromStack: function(stackId) {
            if (top[i] === base[i]) {
                console.error("Stack is empty");
                return;
            }
            var top = dataArray[top[i]];
            dataArray[top[i]--] = null;
            return top;
        },

        top: function(stackId) {
            //TO-DO
        },

        isEmpty: function(stackId) {
            //TO-DO
        }
    };
}

//Problem-18 Consider an empty stack of integers. Let the numbers 1,2,3,4,5,6 be pushed on to this stack only in the order they appear from left to right.
//Let S indicates a push and X indicates a pop operation. Can the be permuted in to the order? If so, then give the order string of operation.