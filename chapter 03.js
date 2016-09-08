// 3.6 Single Linked Lists
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

//Traversing the Linked List
function ListLength(headNode) {
    var length = 0,
        currentNode = headNode;

    while (currentNode) {
        length++;
        currentNode = currentNode.getNext();
    }
    return length;
}

//Inserting a node in Singly Linked List
function InsertInLinkedList(headNode, nodeToInsert, position) {
    var size, count = 1,
        previousNode, currentNode;
    if (!headNode || !headNode.getData()) { //inserting at the beginning when no LinkList present
        headNode = nodeToInsert;
        return;
    }
    size = ListLength(headNode);
    if (position > size + 1 || position < 1) {
        console.error("Position of node to insert is invalid. The valid inputs are 1 to " + (size + 1));
        return;
    }
    if (position === 1) { //inserting at the beginning when there is some LinkList present
        nodeToInsert.setNext(headNode);
        headNode = nodeToInsert;
        return;
    }
    previousNode = headNode;
    while (count < position - 1) {
        previousNode = previousNode.getNext();
        count++;
    }
    currentNode = previousNode.getNext();
    nodeToInsert.setNext(currentNode);
    previousNode.setNext(nodeToInsert);
}

//Deleting a node in Singly Linked List
function DeleteNodeFromLinkedList(headNode, position) {
    var count = 1,
        previousNode,
        currentNode = new ListNode(),
        size = ListLength(headNode);
    if (position > size || position < 1) {
        console.error("Position of node to delete is invalid. The valid inputs are 1 to " + size);
        return;
    }
    if (position === 1) { //deletion the node in the beginning
        currentNode = headNode.getNext();
        headNode = currentNode;
        return;
    }
    previousNode = headNode;
    while (count < position - 1) {
        previousNode = previousNode.getNext();
        count++;
    }
    currentNode = previousNode.getNext();
    previousNode.setNext(currentNode.getNext());
    currentNode = null;
}

//Printing the content of a Linked List
function PrintListData(headNode) {
    var string = "",
        currentNode = headNode;
    while (currentNode) {
        string += "->" + currentNode.getData();
        currentNode = currentNode.getNext();
    }
    console.log("List Elements", string);
}

//----------
//3.7 Doubly Linked Lists
function DLLNode() {
    var data = null,
        next = null,
        previous = null;

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
        },
        setPrevious: function(node) {
            previous = node;
        },
        getPrevious: function() {
            return previous;
        }
    };
}

//Inserting a node in Doubly Linked List
function DLLInsert(headNode, nodeToInsert, position) {
    var size, count = 1,
        previousNode, currentNode;
    if (!headNode || !headNode.getData()) { //inserting at the beginning when no LinkList present
        headNode = nodeToInsert;
        return;
    }
    size = ListLength(headNode);
    if (position > size + 1 || position < 1) {
        console.error("Position of node to insert is invalid. The valid inputs are 1 to " + (size + 1));
        return;
    }
    if (position === 1) { //inserting at the beginning when there is some LinkList present
        nodeToInsert.setNext(headNode);
        headNode.setPrevious(nodeToInsert);
        headNode = nodeToInsert;
        return;
    }
    previousNode = headNode;
    while (count < position - 1) {
        previousNode = previousNode.getNext();
        count++;
    }
    currentNode = previousNode.getNext();
    nodeToInsert.setNext(currentNode);
    if (currentNode) {
        currentNode.setPrevious(nodeToInsert);
    }
    previousNode.setNext(nodeToInsert);
    nodeToInsert.setPrevious(previousNode);
}

//Deleting a node in Doubly Linked List
function DLLDelete(headNode, position) {
    var count = 1,
        laterNode,
        previousNode,
        currentNode = new ListNode(),
        size = ListLength(headNode);
    if (position > size || position < 1) {
        console.error("Position of node to delete is invalid. The valid inputs are 1 to " + size);
        return;
    }
    if (position === 1) { //deletion the node in the beginning
        currentNode = headNode.getNext();
        currentNode.setPrevious(null);
        headNode = currentNode;
        return;
    }
    previousNode = headNode;
    while (count < position - 1) {
        previousNode = previousNode.getNext();
        count++;
    }
    currentNode = previousNode.getNext();
    laterNode = currentNode.getNext();
    previousNode.setNext(laterNode);
    if (laterNode) {
        laterNode.setPrevious(previousNode);
    }
    currentNode = null;
}

//----------
// 3.8 Single Linked Lists
function CLLNode() {
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

//Traversing the Linked List
function CircularListLength(headNode) {
    var length = 0,
        currentNode = headNode;
    while (currentNode) {
        length++;
        currentNode = currentNode.getNext();
        if (currentNode === headNode) {
            break;
        }
    }
    return length;
}

//Printing the content of a Circular List
function PrintCircularListData(headNode) {
    var string = "",
        currentNode = headNode;
    while (currentNode) {
        string += "->" + currentNode.getData();
        currentNode = currentNode.getNext();
        if (currentNode === headNode) {
            break;
        }
    }
    console.log("List Elements", string);
}

//Inserting a Node at the End of a Circular Linked List
function InsertAtEndInCLL(headNode, nodeToInsert) {
    var currentNode = headNode;
    while (currentNode.getNext() !== headNode) {
        currentNode = currentNode.getNext();
    }
    nodeToInsert.setNext(headNode);
    currentNode.setNext(nodeToInsert);
}

//Inserting a Node at Front of a Circular Linked List
function InsertAtBeginingInCLL(headNode, nodeToInsert) {
    var currentNode = headNode;
    while (currentNode.getNext() !== headNode) {
        currentNode = currentNode.getNext();
    }
    if (!headNode) {
        nodeToInsert.setNext(nodeToInsert);
    } else {
        nodeToInsert.setNext(headNode);
        currentNode.setNext(nodeToInsert);
    }
    headNode = nodeToInsert;
}

//Deleting the Last Node in a Circular Linked List
function DeleteLastNodeFromCLL(headNode) {
    var temp = headNode,
        currentNode = headNode;
    if (!headNode) {
        console.error("List Empty");
        return;
    }
    while (currentNode.getNext() !== headNode) {
        temp = currentNode;
        currentNode = currentNode.getNext();
    }
    currentNode = null;
    temp.setNext(headNode);
}

//Deleting the First Node in a Circular Linked List
function DeleteFrontNodeFromCLL(headNode) {
    var currentNode = headNode;
    if (!headNode) {
        console.error("List Empty");
        return;
    }
    while (currentNode.getNext() !== headNode) {
        currentNode = currentNode.getNext();
    }
    currentNode.setNext(headNode.getNext());
    headNode = headNode.getNext();
}

//----------
//Problem-2 Find nth node from the end of Linked List
//Brute-Force Approach

function nThNodeFromEnd(headNode, position) {
    var length = ListLength(headNode);
    if ((length < position) || (length < 1)) {
        console.error("Fewer no of nodes in the list");
        return;
    }
    if (length === position) {
        console.log("nTh node from end is ", headNode);
        return;
    }
    nThNodeFromEnd(headNode.getNext(), position);
}

//Problem-4 Can we use Problem-3 approach for solving Problem-2 without creating hash table
function nThNodeFromEndWithoutHash(headNode, position) {
    var length = ListLength(headNode);
    if ((length < position) || (length < 1)) {
        console.error("Fewer no of nodes in the list");
        return;
    }
    var beginingPos = length - position + 1;
    var currentNode = headNode;
    var count = 1;
    while (count < beginingPos) {
        currentNode = currentNode.getNext();
        count++;
    }
    console.log("nTh node from end is ", currentNode);
}

//Problem-5 Can we solve Problem-2 in one scan
function nThNodeFromEndInOneScan(headNode, position) {
    var pTemp = headNode,
        nThNode = headNode,
        count = 0;
    while (pTemp) {
        count++;
        if (position - count < 0) {
            nThNode = nThNode.getNext();
        }
        pTemp = pTemp.getNext();
    }
    if (count >= position) {
        console.log("nTh node from end is ", nThNode);
        return;
    }
    console.error("Fewer no of nodes in the list");
}

//Problem-6 Check whether the given linked list is either NULL-terminated or ends in cycle
//There is one way with hash value (Defined in Problem-7) and an efficient way (defined in Problem-9)
function isLinkedListContainsLoop(headNode) {
    var flag = false,
        slowPtr = headNode,
        fastPtr = headNode;
    while (slowPtr && fastPtr) {
        fastPtr = fastPtr.getNext();
        if (!fastPtr) {
            break;
        }
        if (slowPtr === fastPtr) {
            flag = true;
            break;
        }
        fastPtr = fastPtr.getNext();
        if (slowPtr === fastPtr) {
            flag = true;
            break;
        }
        slowPtr = slowPtr.getNext();
    }
    return flag;
}

//Problem-11 Check whether the given linked list is either NULL-terminated or not. If there is a cycle, find the start node of the loop
//Its the extended version of previous solution (Problem-9).
function findBegninOfLoop(headNode) {
    var slowPtr = headNode,
        fastPtr = headNode,
        loopExist = false;
    while (fastPtr && fastPtr.getNext()) {
        fastPtr = fastPtr.getNext().getNext();
        slowPtr = slowPtr.getNext();
        if (slowPtr === fastPtr) {
            loopExist = true;
            break;
        }
    }
    if (loopExist) {
        slowPtr = headNode;
        while (slowPtr !== fastPtr) {
            fastPtr = fastPtr.getNext();
            slowPtr = slowPtr.getNext();
        }
        console.log("Loop start from", slowPtr);
    } else {
        console.error("Loop does not exist");
    }
}

//Problem-14 Check whether the given linked list is either NULL-terminated or not. If there is a cycle, find the length of the loop
function findLoopLength(headNode) {
    var slowPtr = headNode,
        fastPtr = headNode,
        loopExist = false,
        count = 1;
    while (fastPtr && fastPtr.getNext()) {
        fastPtr = fastPtr.getNext().getNext();
        slowPtr = slowPtr.getNext();
        if (slowPtr === fastPtr) {
            loopExist = true;
            break;
        }
    }
    if (loopExist) {
        fastPtr = fastPtr.getNext();
        while (slowPtr !== fastPtr) {
            fastPtr = fastPtr.getNext();
            count++;
        }
        console.log("Loop length is ", count);
    } else {
        console.log("Loop does not exist");
    }
}

//Problem-15 Insert a node in a sorted linked list
function insertInSortedList(headNode, newNode) {
    var previousNode,
        currentNode = headNode;
    if (!headNode) {
        headNode = newNode;
        return;
    }
    while (currentNode && currentNode.getData() < newNode.getData()) {
        previousNode = currentNode;
        currentNode = currentNode.getNext();
    }
    previousNode.setNext(newNode);
    newNode.setNext(currentNode);
}

//Problem-16 Reverse a singly linked list
function reserveList(headNode) {
    var temp = null,
        nextNode = null;
    while (headNode) {
        nextNode = headNode.getNext();
        headNode.setNext(temp);
        temp = headNode;
        headNode = nextNode;
    }
    headNode = temp;
}

//Problem-17 Suppose there are two singly linked list both of which intersect at some point and become single linked list...
//Brute-Force Approach
function findIntersectingNodeBruteForce(headOfFirst, headOfSecond) {
    var temp = headOfSecond;
    while (headOfFirst) {
        while (headOfSecond) {
            if (headOfFirst === headOfSecond) {
                return headOfFirst;
            }
            headOfSecond = headOfSecond.getNext();
        }
        headOfFirst = headOfFirst.getNext();
        headOfSecond = temp;
    }
    return null;
}

//Problem-23 Can we improve the complexity of Problem-17
//Efficient Approach
function findIntersectingNode(headOfFirst, headOfSecond) {
    var i, temp,
        lengthOfFirst = ListLength(headOfFirst),
        lengthOfSecond = ListLength(headOfSecond),
        diff = lengthOfFirst - lengthOfSecond;
    if (lengthOfFirst < lengthOfSecond) {
        temp = headOfFirst;
        headOfFirst = headOfSecond;
        headOfSecond = temp;
        diff = lengthOfSecond - lengthOfFirst;
    }
    for (i = 0; i < diff; i++) {
        headOfFirst = headOfFirst.getNext();
    }
    while (headOfFirst && headOfSecond) {
        if (headOfFirst === headOfSecond) {
            return headOfFirst;
        }
        headOfFirst = headOfFirst.getNext();
        headOfSecond = headOfSecond.getNext();
    }
    return null;
}

//Problem-24 How will you find the middle of the linked list?
//Brute-Force Approach
function findMiddleBruteForce(headNode) {
    var temp,
        count1 = 0,
        count2 = 0;
    while (headNode && headNode.getNext()) {
        count1++;
        temp = headNode.getNext();
        while (temp) {
            temp = temp.getNext();
            count2++;
        }
        if (count1 >= count2) {
            return headNode;
        }
        headNode = headNode.getNext();
        count2 = 0;
    }
}

//Problem-25 Can we improve the complexity of Problem-24?
//By finding length
function findMiddleByLength(headNode) {
    var middle,
        length = 0,
        temp = headNode;
    while (headNode) {
        headNode = headNode.getNext();
        length++;
    }
    middle = parseInt((length / 2), 10);
    length = 0;
    while (length !== middle) {
        temp = temp.getNext();
        length++;
    }
    return temp;
}

//Problem-27 Can we solve Problem-24 in one scan?
//Efficient Approach
function findMiddle(headNode) {
    var i = 0,
        temp = headNode;
    while (headNode) {
        if (i === 0) {
            i = 1;
            headNode = headNode.getNext();
        } else if (i === 1) {
            i = 0;
            temp = temp.getNext();
            headNode = headNode.getNext();
        }
    }
    return temp;
}

//Problem-28 How will you display a linked list from the end?
//Traverse recursively till the end
function PrintListFromTheEnd(headNode) {
    if (!headNode) {
        return;
    }
    PrintListFromTheEnd(headNode.getNext());
    console.log(headNode.getData());
}

//Problem-31 Given two sorted linked lists, we need to merge them into the third list in sorted order
function mergeList(headOfFirst, headOfSecond) {
    var temp = new ListNode();
    if (!headOfFirst) {
        return headOfSecond;
    }
    if (!headOfSecond) {
        return headOfFirst;
    }
    if (headOfFirst.getData() <= headOfSecond.getData()) {
        temp = headOfFirst;
        temp.setNext(mergeList(headOfFirst.getNext(), headOfSecond));
    } else {
        temp = headOfSecond;
        temp.setNext(mergeList(headOfFirst, headOfSecond.getNext()));
    }
    return temp;
}

//Problem-32 Reverse the linked list in pairs.
//Recursive version
function reversePairRecursive(head) {
    if (!head || !head.getNext()) {
        return head;
    }
    var curr = head.getNext();
    head.setNext(reversePairRecursive(curr.getNext()));
    curr.setNext(head);
    return curr;
}

//Iterative version
function reversePairIterative(head) {
    var temp, prev, curr, tmp;
    temp = new ListNode();
    temp.setNext(head);
    prev = temp;
    curr = head;
    while (curr && curr.getNext()) {
        tmp = curr.getNext().getNext();
        curr.getNext().setNext(prev.getNext());
        prev.setNext(curr.getNext());
        curr.setNext(tmp);
        prev = curr;
        curr = prev.getNext();
    }
    return temp.getNext();
}

//Problem-36 Split a Circular Linked List into two equal parts. If the numbers of nodes in the list are odd then make first list one node extra than second one.
//Use namespace split, which must cointains head1 and head2 in it. (i.e. var split = {head1, head2};)
function splitNode(head, split) {
    var slowPtr = head,
        fastPtr = head;
    if (!head) {
        return;
    }
    /*If there are odd nodes in circular list then fastPtr.next become head and for even nodes, fastPtr.next.next become head*/
    while (fastPtr.getNext() !== head && fastPtr.getNext().getNext() !== head) {
        fastPtr = fastPtr.getNext().getNext();
        slowPtr = slowPtr.getNext();
    }
    /*If there are even nodes, move fastPtr*/
    if (fastPtr.getNext().getNext() === head) {
        fastPtr = fastPtr.getNext();
    }
    /*Set the head of first half*/
    split.head1 = head;
    /*Set the head of second half*/
    if (head.getNext() !== head) {
        split.head2 = slowPtr.getNext();
    }
    /*Make both list circular*/
    fastPtr.setNext(split.head2);
    slowPtr.setNext(split.head1);
}

//Problem-39 For a given K value (K>0) reverse blocks of K nodes in a list.
//Recursive version
function reverseKNodesRecursive(head, K) {
    var current = head,
        next = null,
        prev = null,
        count = K;
    //Reverse K nodes
    while (current && count > 0) {
        next = current.getNext();
        current.setNext(prev);
        prev = current;
        current = next;
        count--;
    }
    //Now next points to K+1 th node, returns the pointer to the head node
    if (next !== null) {
        head.setNext(reverseKNodesRecursive(next, K));
    } //return head node
    return prev;
}

//Iterative version
function reverseKNodes(head, K) {
    var count, tail, next,
        current = head,
        prevTail = null,
        prevCurrent = head;
    while (current) {
        //loop for reversing K nodes
        count = K;
        tail = null;
        while (current && count > 0) {
            next = current.getNext();
            current.setNext(tail);
            tail = current;
            current = next;
            count--;
        }
        //reversed K Nodes
        if (prevTail) {
            //Link this set and previous set
            prevTail.setNext(tail);
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
}

//Problem-41 Josephus Circle: Josephus Problem (or Josephus permutation) is a theoretical problem related to a certain counting-out game.
//N people have decided to elect a leader by arranging themselves in a circle and eliminating every Mth person around the circle.
//Assume input is circular linked list with N nodes and each node has a number [1 - N] associated with it. The head node has number 1 as data.
function getJosephusPosition(N, M) {
    var i, j, tmp, temp,
        head = new ListNode();
    //Create a circular linked list containing all the players
    head.setData(1);
    temp = head;
    for (i = 2; i <= N; i++) {
        tmp = new ListNode();
        tmp.setData(i);
        head.setNext(tmp);
        head = head.getNext();
    }
    head.setNext(temp); //Close circular list by pointing last element to first
    head = head.getNext(); //Move head position to a node where node.data = 1
    PrintCircularListData(head); //Only to check how many nodes are there
    for (i = N; i > 1; i--) {
        for (j = 0; j < M - 1; j++) { //Because Mth person is at M-1 distance
            head = head.getNext();
        }
        head.setNext(head.getNext().getNext());
    }
    console.log("Last player left standing is: ", head.getData());
}
