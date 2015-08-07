/*jslint browser: true*/
/*jslint white: true */
// 3.6 Single Linked Lists
var ListNode = function() {
	return {
		data: null,
		next: null
	};
};

//Traversing the Linked List
var ListLength = function(headNode) {
	var length = 0;
	var currentNode = headNode;
	while (currentNode !== null) {
		length++;
		currentNode = currentNode.next;
	}
	return length;
};

//Inserting a node in Singly Linked List
var InsertInLinkedList = function(headNode, nodeToInsert, position) {
	if (headNode.data === null) { //inserting at the beginning when no LinkList present
		return nodeToInsert;
	}
	var size = ListLength(headNode);
	if (position > size + 1 || position < 1) {
		console.log("Position of node to insert is invalid. The valid inputs are 1 to " + (size + 1));
		return headNode;
	}
	if (position === 1) { //inserting at the beginning when there is some LinkList present
		nodeToInsert.next = headNode;
		return nodeToInsert;
	}
	var previousNode = headNode;
	var count = 1;
	while (count < position - 1) {
		previousNode = previousNode.next;
		count++;
	}
	var currentNode = previousNode.next;
	nodeToInsert.next = currentNode;
	previousNode.next = nodeToInsert;
	return headNode;
};

//Deleting a node in Singly Linked List
var DeleteNodeFromLinkedList = function(headNode, position) {
	var currentNode = new ListNode();
	var size = ListLength(headNode);
	if (position > size || position < 1) {
		console.log("Position of node to delete is invalid. The valid inputs are 1 to " + size);
		return headNode;
	}
	if (position === 1) { //deletion the node in the beginning
		currentNode = headNode.next;
		headNode = null;
		return currentNode;
	}
	var previousNode = headNode;
	var count = 1;
	while (count < position - 1) {
		previousNode = previousNode.next;
		count++;
	}
	currentNode = previousNode.next;
	previousNode.next = currentNode.next;
	currentNode = null;
	return headNode;
};

//Printing the content of a Linked List
function PrintListData(headNode) {
	var string = "";
	var currentNode = headNode;
	while (currentNode !== null) {
		string += "->" + currentNode.data;
		currentNode = currentNode.next;
	}
	console.log("List Elements", string);
}

//----------
//3.7 Doubly Linked Lists
var DLLNode = function() {
	return {
		data: null,
		next: null,
		previous: null
	};
};

//Inserting a node in Doubly Linked List

var DLLInsert = function(headNode, nodeToInsert, position) {
	if (headNode.data === null) { //inserting at the beginning when no LinkList present
		return nodeToInsert;
	}
	var size = ListLength(headNode);
	if (position > size + 1 || position < 1) {
		console.log("Position of node to insert is invalid. The valid inputs are 1 to " + (size + 1));
		return headNode;
	}
	if (position === 1) { //inserting at the beginning when there is some LinkList present
		nodeToInsert.next = headNode;
		headNode.previous = nodeToInsert;
		return nodeToInsert;
	}
	var previousNode = headNode;
	var count = 1;
	while (count < position - 1) {
		previousNode = previousNode.next;
		count++;
	}
	var currentNode = previousNode.next;
	nodeToInsert.next = currentNode;
	if (currentNode !== null) {
		currentNode.previous = nodeToInsert;
	}
	previousNode.next = nodeToInsert;
	nodeToInsert.previous = previousNode;
	return headNode;
};

//Deleting a node in Doubly Linked List

var DLLDelete = function(headNode, position) {
	var currentNode = new ListNode();
	var size = ListLength(headNode);
	if (position > size || position < 1) {
		console.log("Position of node to delete is invalid. The valid inputs are 1 to " + size);
		return headNode;
	}
	if (position === 1) { //deletion the node in the beginning
		currentNode = headNode.next;
		currentNode.previous = null;
		headNode = null;
		return currentNode;
	}
	var previousNode = headNode;
	var count = 1;
	while (count < position - 1) {
		previousNode = previousNode.next;
		count++;
	}
	currentNode = previousNode.next;
	var laterNode = currentNode.next;
	previousNode.next = laterNode;
	if (laterNode !== null) {
		laterNode.previous = previousNode;
	}
	currentNode = null;
	return headNode;
};

//----------
// 3.8 Single Linked Lists
var CLLNode = function() {
	return {
		data: null,
		next: null
	};
};

//Traversing the Linked List
var CircularListLength = function(headNode) {
	var length = 0;
	var currentNode = headNode;
	while (currentNode !== null) {
		length++;
		currentNode = currentNode.next;
		if (currentNode === headNode) {
			break;
		}
	}
	return length;
};

//Printing the content of a Circular List
function PrintCircularListData(headNode) {
	var string = "";
	var currentNode = headNode;
	while (currentNode !== null) {
		string += "->" + currentNode.data;
		currentNode = currentNode.next;
		if (currentNode === headNode) {
			break;
		}
	}
	console.log("List Elements", string);
}

//Inserting a Node at the End of a Circular Linked List
function InsertAtEndInCLL(headNode, nodeToInsert) {
	var currentNode = headNode;
	while (currentNode.next !== headNode) {
		currentNode = currentNode.next;
	}
	nodeToInsert.next = headNode;
	currentNode.next = nodeToInsert;
}

//Inserting a Node at Front of a Circular Linked List
var InsertAtBeginingInCLL = function(headNode, nodeToInsert) {
	var currentNode = headNode;
	while (currentNode.next !== headNode) {
		currentNode = currentNode.next;
	}
	if (headNode === null) {
		nodeToInsert.next = nodeToInsert;
	} else {
		nodeToInsert.next = headNode;
		currentNode.next = nodeToInsert;
	}
	return nodeToInsert;
};

//Deleting the Last Node in a Circular Linked List
function DeleteLastNodeFromCLL(headNode) {
	var temp = headNode;
	var currentNode = headNode;
	if (headNode === null) {
		console.log("List Empty");
		return;
	}
	while (currentNode.next !== headNode) {
		temp = currentNode;
		currentNode = currentNode.next;
	}
	currentNode = null;
	temp.next = headNode;
	return;
}

//Deleting the First Node in a Circular Linked List
var DeleteFrontNodeFromCLL = function(headNode) {
	var currentNode = headNode;
	if (headNode === null) {
		console.log("List Empty");
		return;
	}
	while (currentNode.next !== headNode) {
		currentNode = currentNode.next;
	}
	currentNode.next = headNode.next;
	return headNode.next;
};

//----------
//Problem-2 Find nth node from the end of Linked List
//Brute-Force Approach

function nThNodeFromEnd(headNode, position) {
	var length = ListLength(headNode);
	if ((length < position) || (length < 1)) {
		console.log("Fewer no of nodes in the list");
		return;
	}
	if (length === position) {
		console.log("nTh node from end is ", headNode);
		return;
	}
	nThNodeFromEnd(headNode.next, position);
}

//Problem-4 Can we use Problem-3 approach for solving Problem-2 without creating hash table
function nThNodeFromEndWithoutHash(headNode, position) {
	var length = ListLength(headNode);
	if ((length < position) || (length < 1)) {
		console.log("Fewer no of nodes in the list");
		return;
	}
	var beginingPos = length - position + 1;
	var currentNode = headNode;
	var count = 1;
	while (count < beginingPos) {
		currentNode = currentNode.next;
		count++;
	}
	console.log("nTh node from end is ", currentNode);
}

//Problem-5 Can we solve Problem-2 in one scan
function nThNodeFromEndInOneScan(headNode, position) {
	var pTemp = headNode,
		nThNode = headNode,
		count = 0;
	while (pTemp !== null) {
		count++;
		if (position - count < 0) {
			nThNode = nThNode.next;
		}
		pTemp = pTemp.next;
	}
	if (count >= position) {
		console.log("nTh node from end is ", nThNode);
		return;
	}
	console.log("Fewer no of nodes in the list");
}

//Problem-6 Check whether the given linked list is either NULL-terminated or ends in cycle
//There is one way with hash value (Defined in Problem-7) and an efficient way (defined in Problem-9)
var isLinkedListContainsLoop = function(headNode) {
	var slowPtr = headNode,
		fastPtr = headNode;
	while (slowPtr !== null && fastPtr !== null) {
		fastPtr = fastPtr.next;
		if (fastPtr === null) {
			return false;
		}
		if (slowPtr === fastPtr) {
			return true;
		}
		fastPtr = fastPtr.next;
		if (slowPtr === fastPtr) {
			return true;
		}
		slowPtr = slowPtr.next;
	}
	return false;
};

//Problem-11 Check whether the given linked list is either NULL-terminated or not. If there is a cycle, find the start node of the loop
//Its the extended version of previous solution (Problem-9).
function findBegninOfLoop(headNode) {
	var slowPtr = headNode,
		fastPtr = headNode,
		loopExist = false;
	while (fastPtr !== null && fastPtr.next !== null) {
		fastPtr = fastPtr.next.next;
		slowPtr = slowPtr.next;
		if (slowPtr === fastPtr) {
			loopExist = true;
			break;
		}
	}
	if (loopExist) {
		slowPtr = headNode;
		while (slowPtr !== fastPtr) {
			fastPtr = fastPtr.next;
			slowPtr = slowPtr.next;
		}
		console.log("Loop start from", slowPtr);
	} else {
		console.log("Loop does not exist");
	}
}

//Problem-14 Check whether the given linked list is either NULL-terminated or not. If there is a cycle, find the length of the loop
function findLoopLength(headNode) {
	var slowPtr = headNode,
		fastPtr = headNode,
		loopExist = false,
		count = 1;
	while (fastPtr !== null && fastPtr.next !== null) {
		fastPtr = fastPtr.next.next;
		slowPtr = slowPtr.next;
		if (slowPtr === fastPtr) {
			loopExist = true;
			break;
		}
	}
	if (loopExist) {
		fastPtr = fastPtr.next;
		while (slowPtr !== fastPtr) {
			fastPtr = fastPtr.next;
			count++;
		}
		console.log("Loop length is ", count);
	} else {
		console.log("Loop does not exist");
	}
}

//Problem-15 Insert a node in a sorted linked list
var insertInSortedList = function(headNode, newNode) {
	var previousNode, currentNode = headNode;
	if (headNode === null) {
		return newNode;
	}
	while (currentNode !== null && currentNode.data < newNode.data) {
		previousNode = currentNode;
		currentNode = currentNode.next;
	}
	previousNode.next = newNode;
	newNode.next = currentNode;
	return headNode;
};

//Problem-16 Reverse a singly linked list
var reserveList = function(headNode) {
	var temp = null,
		nextNode = null;
	while (headNode !== null) {
		nextNode = headNode.next;
		headNode.next = temp;
		temp = headNode;
		headNode = nextNode;
	}
	return temp;
};

//Problem-17 Suppose there are two singly linked list both of which intersect at some point and become single linked list...
//Brute-Force Approach
var findIntersectingNodeBruteForce = function(headOfFirst, headOfSecond) {
	var temp = headOfSecond;
	while (headOfFirst !== null) {
		while (headOfSecond !== null) {
			if (headOfFirst === headOfSecond) {
				return headOfFirst;
			}
			headOfSecond = headOfSecond.next;
		}
		headOfFirst = headOfFirst.next;
		headOfSecond = temp;
	}
	return null;
};

//Problem-23 Can we improve the complexity of Problem-17
//Efficient Approach
var findIntersectingNode = function(headOfFirst, headOfSecond) {
	var lengthOfFirst = ListLength(headOfFirst);
	var lengthOfSecond = ListLength(headOfSecond);
	var diff = lengthOfFirst - lengthOfSecond;
	if (lengthOfFirst < lengthOfSecond) {
		var temp = headOfFirst;
		headOfFirst = headOfSecond;
		headOfSecond = temp;
		diff = lengthOfSecond - lengthOfFirst;
	}
	var i;
	for (i = 0; i < diff; i++) {
		headOfFirst = headOfFirst.next;
	}
	while (headOfFirst !== null && headOfSecond !== null) {
		if (headOfFirst === headOfSecond) {
			return headOfFirst;
		}
		headOfFirst = headOfFirst.next;
		headOfSecond = headOfSecond.next;
	}
	return null;
};

//Problem-24 How will you find the middle of the linked list?
//Brute-Force Approach
var findMiddleBruteForce = function(headNode) {
	var temp, count1 = 0, count2;
	while (headNode !== null && headNode.next !== null) {
		count1++;
		count2 = 0;
		temp = headNode.next;
		while (temp !== null) {
			temp = temp.next;
			count2++;
		}
		if (count1 >= count2) {
			return headNode;
		}
		headNode = headNode.next;
	}
};

//Problem-25 Can we improve the complexity of Problem-24?
//By finding length
var findMiddleByLength = function(headNode) {
	var length = 0;
	var temp = headNode;
	while (headNode !== null) {
		headNode = headNode.next;
		length++;
	}
	var middle = parseInt((length / 2), 10);
	length = 0;
	while (length !== middle) {
		temp = temp.next;
		length++;
	}
	return temp;
};

//Problem-27 Can we solve Problem-24 in one scan?
//Efficient Approach
var findMiddle = function(headNode) {
	var i = 0,
		temp = headNode;
	while (headNode !== null) {
		if (i === 0) {
			i = 1;
			headNode = headNode.next;
		} else if (i === 1) {
			i = 0;
			temp = temp.next;
			headNode = headNode.next;
		}
	}
	return temp;
};

//Problem-28 How will you display a linked list from the end?
//Traverse recursively till the end
function PrintListFromTheEnd(headNode) {
	if (headNode === null) {
		return;
	}
	PrintListFromTheEnd(headNode.next);
	console.log(headNode.data);
}

//Problem-31 Given two sorted linked lists, we need to merge them into the third list in sorted order
var mergeList = function(headOfFirst, headOfSecond) {
	var temp = new ListNode();
	if (headOfFirst === null) {
		return headOfSecond;
	}
	if (headOfSecond === null) {
		return headOfFirst;
	}
	if (headOfFirst.data <= headOfSecond.data) {
		temp = headOfFirst;
		temp.next = mergeList(headOfFirst.next, headOfSecond);
	} else {
		temp = headOfSecond;
		temp.next = mergeList(headOfFirst, headOfSecond.next);
	}
	return temp;
};

//Problem-32 Reverse the linked list in pairs.
//Recursive version
var reversePairRecursive = function(head) {
	if (head === null || head.next === null) {
		return head;
	}
	var curr = head.next;
	head.next = reversePairRecursive(curr.next);
	curr.next = head;
	return curr;
};
//Iterative version
var reversePairIterative = function(head) {
	var temp = new ListNode();
	temp.next = head;
	var prev = temp,
		curr = head;
	while (curr !== null && curr.next !== null) {
		var tmp = curr.next.next;
		curr.next.next = prev.next;
		prev.next = curr.next;
		curr.next = tmp;
		prev = curr;
		curr = prev.next;
	}
	return temp.next;
};

//Problem-36 Split a Circular Linked List into two equal parts. If the numbers of nodes in the list are odd then make first list one node extra than second one.
//split must cointains head1 and head2 in it. (i.e. var split = {head1, head2};)
function splitNode(head, split) {
	var slowPtr = head, fastPtr = head;
	if (head === null) {
		return;
	}
	/*If there are odd nodes in circular list then fastPtr.next 
	become head and for even nodes, fastPtr.next.next become head*/
	while (fastPtr.next !== head && fastPtr.next.next !== head) {
		fastPtr = fastPtr.next.next;
		slowPtr = slowPtr.next;
	}
	/*If there are even nodes, move fastPtr*/
	if (fastPtr.next.next === head) {
		fastPtr = fastPtr.next;
	}
	/*Set the head of first half*/
	split.head1 = head;
	/*Set the head of second half*/
	if(head.next !== head) {
		split.head2 = slowPtr.next;
	}
	/*Make both list circular*/
	fastPtr.next = split.head2;
	slowPtr.next = split.head1;
}

//Problem-39 For a given K value (K>0) reverse blocks of K nodes in a list.
//Recursive version
var reverseKNodesRecursive = function(head, K) {
	var current = head,
		next = null,
		prev = null,
		count = K;
	//Reverse K nodes
	while (current !== null && count > 0) {
		next = current.next;
		current.next = prev;
		prev = current;
		current = next;
		count--;
	}
	//Now next points to K+1 th node, returns the pointer to the head node
	if (next !== null) {
		head.next = reverseKNodesRecursive(next, K);
	} //return head node
	return prev;
};
//Iterative version
var reverseKNodes = function(head, K) {
	var current = head,
		prevTail = null,
		prevCurrent = head;
	while (current !== null) {
		//loop for reversing K nodes
		var count = K,
			tail = null;
		while (current !== null && count > 0) {
			var next = current.next;
			current.next = tail;
			tail = current;
			current = next;
			count--;
		}
		//reversed K Nodes
		if (prevTail !== null) {
			//Link this set and previous set
			prevTail.next = tail;
		} else {
			//We just reversed first set of K nodes, update head point to the Kth Node
			head = tail;
		}
		//save the last node after reverse since we need to connect to the next set.
		prevTail = prevCurrent;
		//Save the current node, which will become the last node after reverse
		prevCurrent = current;
	}
	return head;
};

//Problem-41 Josephus Circle: Josephus Problem (or Josephus permutation) is a theoretical problem related to a certain counting-out game.
//N people have decided to elect a leader by arranging themselves in a circle and eliminating every Mth person around the circle.
//Assume input is circular linked list with N nodes and each node has a number [1 - N] associated with it. The head node has number 1 as data.
function getJosephusPosition(N, M) {
	var i, j, temp, head = new ListNode();
	//Create a circular linked list containing all the players
	head.data = 1;
	temp = head;
	for (i = 2; i <= N; i++) {
		var tmp = new ListNode();
		tmp.data = i;
		head.next = tmp;
		head = head.next;
	}
	head.next = temp; //Close circular list by pointing last element to first
	head = head.next; //Move head position to a node where node.data = 1
	PrintCircularListData(head); //Only to check how many nodes are there
	for (i = N; i > 1; i--) {
		for (j = 0; j < M-1; j++) { //Because Mth person is at M-1 distance
			head = head.next;
		}
		head.next = head.next.next;
	}
	console.log("Last player left standing is: ", head.data);
}