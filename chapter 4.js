/*jslint browser: true*/
/*jslint white: true */
//4.6 Implementation
//Simple Array Implementation

var ArrayStack = {
	top: -1,
	capacity: 1,
	array: [],

	isEmpty: function(){
		return (this.top === -1);
	},
	isStackFull: function(){
		return (this.top === (this.capacity - 1));
	},
	pushInStack: function(data){
		if(this.isStackFull()){
			console.log("Stack Overflow");
		} else {
			this.array[++(this.top)]=data;
		}
	},
	popFromStack: function(){
		if(this.isEmpty()){
			console.log("Stack is Empty");
			return;
		}
		return this.array[this.top--];
	}
};

ArrayStack.capacity = 5;
ArrayStack.pushInStack(2);
ArrayStack.pushInStack(3);
ArrayStack.pushInStack(4);
ArrayStack.pushInStack(5);
ArrayStack.pushInStack(6);
console.log(ArrayStack.popFromStack());
console.log(ArrayStack.popFromStack());
ArrayStack.pushInStack(7);
console.log(ArrayStack.popFromStack());