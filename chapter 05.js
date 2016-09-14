//5.6 Implementation
//Simple Circular Array Implementation of Queue
function ArrayQueue (size) {
    //private
    var front = -1,
        rear = -1,
        capacity = size,
        array = [];
    //closure
    return {
        isEmpty: function () {
            return (front === -1);
        },
        isFull: function () {
            return ((rear+1)%capacity === front);
        },
        getQueueSize: function () {
            return ((capacity-front+rear+1)%capacity);
        },
        enQueue: function (data) {
            if (this.isFull()) {
                console.error('Queue overflow');
                return;
            }
            rear = (rear+1)%capacity;
            array[rear] = data;
            if (front === -1) {
                front = rear;
            }
        },
        deQueue: function () {
            var data;
            if (this.isEmpty()) {
                console.error('Queue Empty');
                return;
            }
            data = array[front];
            if (front === rear) {
                //when only one element left in queue
                front = -1;
                rear = -1;
            } else {
                front = (front+1)%capacity;
            }
            return data;
        }
    }
}

//Dynamic Circular Array Implementation of Queue
function DynArrayQueue (size) {
    //private
    var front = -1,
        rear = -1,
        capacity = size,
        array = [];
    //closure
    return {
        isEmpty: function () {
            return (front === -1);
        },
        isFull: function () {
            return ((rear+1)%capacity === front);
        },
        getQueueSize: function () {
            var size = (capacity-front+rear+1)%capacity;
            /**Size will be zero when the queue get's full
             * This time we have to double the size of array
             * Hence the remaining size is equal to capacity
             */
            if (size === 0) {
                size = capacity;
            }
            return size;
        },
        resizeQueue: function () {
            var initCapacity = capacity;
            capacity *= 2;
            if (rear < front) {
                for (var i=0; i<front; i++) {
                    array[i+initCapacity] = array[i];
                    array[i] = undefined;
                }
                rear += initCapacity;
            }
        },
        enQueue: function (data) {
            if (this.isFull()) {
                this.resizeQueue();
            }
            rear = (rear+1)%capacity;
            array[rear] = data;
            if (front === -1) {
                front = rear;
            }
        },
        deQueue: function () {
            var data;
            if (this.isEmpty()) {
                console.error('Queue Empty');
                return;
            }
            data = array[front];
            if (front === rear) {
                //when only one element left in queue
                front = -1;
                rear = -1;
            } else {
                front = (front+1)%capacity;
            }
            return data;
        }
    }
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

//Linked List Implementation of Queue
function LLQueue () {
    var length = 0,
        frontNode = null,
        rearNode = null;
    return {
        isEmpty: function () {
            return (frontNode === null);
        },
        enQueue: function (data) {
            var newNode = new ListNode();
            newNode.setData(data);
            if (rearNode != null) {
                rearNode.setNext(newNode);
            }
            rearNode = newNode;
            if (frontNode === null) {
                frontNode = rearNode;
            }
            length++;
        },
        deQueue: function () {
            var data;
            if (this.isEmpty()) {
                console.error('Queue Empty');
                return;
            }
            data = frontNode.getData();
            frontNode = frontNode.getNext();
            length--;
            return data;
        },
        getQueueSize: function () {
            return length;
        }
    }
}

//----------
//Problem-1 Give an algorithm for reversing a queue Q. To access the queue, you are only allowed to use the methods of queue ADT.
function QueueReversal (queue) {
    var stack = new LLStack();
    while (!queue.isEmpty()) {
        stack.pushInStack(queue.deQueue());
    }
    while (!stack.isEmpty()) {
        queue.enQueue(stack.popFromStack());
    }
    return queue;
}

//----------
//Problem-2 How to implement a queue using two stacks?

function QueueWithTwoStacks () {
    var stack1 = new LLStack(),
        stack2 = new LLStack();

    return {
        isEmpty: function () {
            if (stack2.isEmpty()) {
                while (!stack1.isEmpty()) {
                    stack2.pushInStack(stack1.popFromStack());
                }
            }
            return stack2.isEmpty();
        },
        enQueue: function (data) {
            stack1.pushInStack(data);
        },
        deQueue: function () {
            if (this.isEmpty()) {
                console.error('Queue Empty');
                return;
            }
            return stack2.popFromStack();
        }
    }
}

//----------
//Problem-3 Show how to efficiently implement one stack using two queues.
function StackWithTwoQueues () {
    var queue1 = new LLQueue(),
        queue2 = new LLQueue();

    return {
        pushInStack: function (data) {
            if (queue1.isEmpty()) {
                queue2.enQueue(data);
            } else {
                queue1.enQueue(data);
            }
        },
        popFromStack: function () {
            var i=0, size;
            if (queue2.isEmpty()) {
                size = queue1.getQueueSize();
                while (i++<size-1) {
                    queue2.enQueue(queue1.deQueue());
                }
                return queue1.deQueue();
            } else {
                size = queue2.getQueueSize();
                while (i++<size-1) {
                    queue1.enQueue(queue2.deQueue());
                }
                return queue2.deQueue();
            }
        }
    }
}