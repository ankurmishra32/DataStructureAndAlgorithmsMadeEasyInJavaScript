// Regression tests for the P0 bugs found during review.
// Run with: npm test

import { test } from 'node:test';
import assert from 'node:assert/strict';

import ListNode from '../madeeasy/chapter03/linkList.js';
import DLLNode from '../madeeasy/chapter03/doubleLinkList.js';
import findMiddle from '../madeeasy/chapter03/findMiddle.js';
import findMiddleBruteForce from '../madeeasy/chapter03/findMiddleBruteForce.js';
import InsertInLinkedList from '../madeeasy/chapter03/insertInLinkedList.js';
import DeleteNodeFromLinkedList from '../madeeasy/chapter03/deleteNodeFromLinkedList.js';
import DLLInsert from '../madeeasy/chapter03/dLLInsert.js';
import DLLDelete from '../madeeasy/chapter03/dLLDelete.js';
import reserveList from '../madeeasy/chapter03/reserveList.js';
import InsertAtBeginingInCLL from '../madeeasy/chapter03/insertAtBeginingInCLL.js';
import InsertAtEndInCLL from '../madeeasy/chapter03/insertAtEndInCLL.js';
import insertInSortedList from '../madeeasy/chapter03/insertInSortedList.js';
import DeleteFrontNodeFromCLL from '../madeeasy/chapter03/deleteFrontNodeFromCLL.js';
import DeleteLastNodeFromCLL from '../madeeasy/chapter03/deleteLastNodeFromCLL.js';
import splitNode from '../madeeasy/chapter03/splitNode.js';

import LLStack from '../madeeasy/chapter04/linkedListStack.js';
import arrayWithTwoStack from '../madeeasy/chapter04/arrayWithTwoStack.js';
import arrayWithThreeStack from '../madeeasy/chapter04/arrayWithThreeStack.js';
import stackReversal from '../madeeasy/chapter04/stackReversal.js';
import infix2postfix from '../madeeasy/chapter04/infix2postfix.js';
import infixEvaluation from '../madeeasy/chapter04/infixEvaluation.js';
import isPalindromeUsingStack from '../madeeasy/chapter04/isPalindromeUsingStack.js';

import ArrayQueue from '../madeeasy/chapter05/arrayQueue.js';
import DynArrayQueue from '../madeeasy/chapter05/dynArrayQueue.js';

import countingSort from '../madeeasy/chapter10/countingSort.js';
import radixSort from '../madeeasy/chapter10/radixSort.js';
import shellSortByKarumanchi from '../madeeasy/chapter10/shellSortByKarumanchi.js';
import numberAppearedMaximum from '../madeeasy/chapter10/numberAppearedMaximum.js';
import improvedCheckWhoWinsTheElection from '../madeeasy/chapter10/improvedCheckWhoWinsTheElection.js';

import binarySearchRecursive from '../madeeasy/chapter11/binarySearchRecursive.js';
import checkDuplicatesInArrayWithAsssumptionOfValues from '../madeeasy/chapter11/checkDuplicatesInArrayWithAsssumptionOfValues.js';
import printRepeatedElementUsingCounting from '../madeeasy/chapter11/printRepeatedElementUsingCounting.js';
import printRepeatedElementsUsingSorting from '../madeeasy/chapter11/printRepeatedElementsUsingSorting.js';
import findMissingNumberBruteForse from '../madeeasy/chapter11/findMissingNumberBruteForse.js';
import findMissingNumberUsingSorting from '../madeeasy/chapter11/findMissingNumberUsingSorting.js';
import improvedFindMissingNumber from '../madeeasy/chapter11/improvedFindMissingNumber.js';
import findMissingNumberUsingXOR from '../madeeasy/chapter11/findMissingNumberUsingXOR.js';

import maxContigousSumUsingDPModified from '../madeeasy/chapter19/maxContigousSumUsingDPModified.js';
import maxContigousSumWithoutDP from '../madeeasy/chapter19/maxContigousSumWithoutDP.js';
import recurrenceToCode from '../madeeasy/chapter19/recurrenceToCode.js';
import recurrenceToCodeUsingDP from '../madeeasy/chapter19/recurrenceToCodeUsingDP.js';
import improvedRecurrenceToCode from '../madeeasy/chapter19/improvedRecurrenceToCode.js';

// ----- Helpers -----

function newNode(value) {
  const node = new ListNode();
  node.setData(value);
  return node;
}

function newDLLNode(value) {
  const node = new DLLNode();
  node.setData(value);
  return node;
}

function listFromArray(arr) {
  let head = null;
  let tail = null;
  for (const v of arr) {
    const node = newNode(v);
    if (!head) head = node;
    else tail.setNext(node);
    tail = node;
  }
  return head;
}

function listToArray(head) {
  const out = [];
  while (head) {
    out.push(head.getData());
    head = head.getNext();
  }
  return out;
}

function dllFromArray(arr) {
  let head = null;
  let previous = null;
  for (const v of arr) {
    const node = newDLLNode(v);
    if (!head) head = node;
    if (previous) {
      previous.setNext(node);
      node.setPrevious(previous);
    }
    previous = node;
  }
  return head;
}

function dllToArray(head) {
  const out = [];
  let current = head;
  while (current) {
    out.push(current.getData());
    current = current.getNext();
  }
  return out;
}

function assertDLLLinks(head) {
  let previous = null;
  let current = head;
  while (current) {
    assert.equal(current.getPrevious(), previous);
    previous = current;
    current = current.getNext();
  }
}

function circularFromArray(arr) {
  if (arr.length === 0) return null;
  const head = newNode(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    const node = newNode(arr[i]);
    current.setNext(node);
    current = node;
  }
  current.setNext(head);
  return head;
}

function circularToArray(head) {
  const out = [];
  if (!head) return out;
  let current = head;
  do {
    out.push(current.getData());
    current = current.getNext();
  } while (current && current !== head);
  return out;
}

// ===== Chapter 19 — DP =====

test('maxContigousSumUsingDPModified returns the real maximum', () => {
  const cases = [
    [-2, 1, -3, 4, -1, 2, 1, -5, 4],
    [1, 2, 3, 4],
    [-1, -2, -3],
    [],
    [5],
  ];
  for (const input of cases) {
    assert.equal(
      maxContigousSumUsingDPModified(input),
      maxContigousSumWithoutDP(input),
      JSON.stringify(input),
    );
  }
  assert.equal(maxContigousSumUsingDPModified([-2, 1, -3, 4, -1, 2, 1, -5, 4]), 6);
});

test('recurrenceToCode, DP and improved versions agree', () => {
  for (let n = 0; n <= 6; n++) {
    const expected = recurrenceToCodeUsingDP(n);
    assert.equal(recurrenceToCode(n), expected, `naive n=${n}`);
    assert.equal(improvedRecurrenceToCode(n), expected, `improved n=${n}`);
  }
});

// ===== Chapter 11 — Searching =====

test('binarySearchRecursive returns found index and -1 for missing', () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8];
  for (let i = 0; i < array.length; i++) {
    assert.equal(binarySearchRecursive(array, array[i]), i);
  }
  assert.equal(binarySearchRecursive(array, 99), -1);
  assert.equal(binarySearchRecursive(array, 0), -1);
});

test('checkDuplicatesInArrayWithAsssumptionOfValues handles zero', () => {
  assert.equal(checkDuplicatesInArrayWithAsssumptionOfValues([0, 0]), true);
  assert.equal(checkDuplicatesInArrayWithAsssumptionOfValues([1, 1, 0]), true);
  assert.equal(checkDuplicatesInArrayWithAsssumptionOfValues([1, 2, 2]), true);
  assert.equal(checkDuplicatesInArrayWithAsssumptionOfValues([0, 1, 2, 3]), false);
  assert.equal(checkDuplicatesInArrayWithAsssumptionOfValues([2, 3, 1, 0]), false);
});

// ===== Chapter 10 — Sorting =====

test('radixSort and countingSort produce sorted arrays', () => {
  const arrays = [
    [170, 45, 75, 90, 802, 24, 2, 66],
    [],
    [0],
    [5, 4, 3, 2, 1],
    [10, 100, 1, 1000, 0],
    [7, 7, 7, 1, 1],
  ];
  for (const input of arrays) {
    const expected = [...input].sort((a, b) => a - b);
    const radixInput = [...input];
    radixSort(radixInput);
    assert.deepEqual(radixInput, expected, `radix ${JSON.stringify(input)}`);
    const countingInput = [...input];
    countingSort(countingInput);
    assert.deepEqual(countingInput, expected, `counting ${JSON.stringify(input)}`);
  }
});

test('shellSortByKarumanchi sorts small and large arrays', () => {
  const arrays = [
    [2, 1],
    [3, 2, 1],
    [12, 8, 14],
    [9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
    [5, 3, 8, 1, 9, 2, 7, 4, 6, 0, 11, 15, 13, 12, 14, 10],
  ];
  for (const input of arrays) {
    const expected = [...input].sort((a, b) => a - b);
    const actual = [...input];
    shellSortByKarumanchi(actual);
    assert.deepEqual(actual, expected, JSON.stringify(input));
  }
});

// ===== Chapter 04 — Stacks =====

test('LLStack treats falsy values as real entries', () => {
  const stack = new LLStack();
  stack.pushInStack(0);
  assert.equal(stack.isEmpty(), false);
  assert.equal(stack.top(), 0);
  stack.pushInStack(false);
  assert.equal(stack.isEmpty(), false);
  assert.equal(stack.top(), false);
  assert.equal(stack.popFromStack(), false);
  assert.equal(stack.popFromStack(), 0);
  assert.equal(stack.isEmpty(), true);
});

test('stackReversal reverses the stack contents', () => {
  const stack = new LLStack();
  [1, 2, 3].forEach((v) => stack.pushInStack(v));
  const reversal = stackReversal();
  reversal.reverseStack(stack);
  assert.equal(stack.popFromStack(), 1);
  assert.equal(stack.popFromStack(), 2);
  assert.equal(stack.popFromStack(), 3);
  assert.equal(stack.isEmpty(), true);
});

// ===== Chapter 03 — Linked lists =====

test('findMiddleBruteForce agrees with findMiddle and handles single node', () => {
  for (let n = 1; n <= 8; n++) {
    const values = Array.from({ length: n }, (_, i) => i + 1);
    const expected = findMiddle(listFromArray(values)).getData();
    const actual = findMiddleBruteForce(listFromArray(values)).getData();
    assert.equal(actual, expected, `n=${n}`);
  }
  assert.equal(findMiddleBruteForce(null), null);
});

test('InsertInLinkedList returns the new head', () => {
  const empty = InsertInLinkedList(null, newNode(5), 1);
  assert.deepEqual(listToArray(empty), [5]);

  const middle = InsertInLinkedList(listFromArray([1, 3]), newNode(2), 2);
  assert.deepEqual(listToArray(middle), [1, 2, 3]);

  const front = InsertInLinkedList(listFromArray([2, 3]), newNode(1), 1);
  assert.deepEqual(listToArray(front), [1, 2, 3]);
});

test('DeleteNodeFromLinkedList returns the new head', () => {
  assert.deepEqual(listToArray(DeleteNodeFromLinkedList(listFromArray([1, 2, 3]), 1)), [2, 3]);
  assert.deepEqual(listToArray(DeleteNodeFromLinkedList(listFromArray([1, 2, 3]), 2)), [1, 3]);
  assert.deepEqual(listToArray(DeleteNodeFromLinkedList(listFromArray([1, 2, 3]), 3)), [1, 2]);
});

test('reserveList returns the reversed head', () => {
  const reversed = reserveList(listFromArray([1, 2, 3, 4]));
  assert.deepEqual(listToArray(reversed), [4, 3, 2, 1]);
  assert.equal(reserveList(null), null);
});

test('insertInSortedList handles front and middle insertion', () => {
  const front = insertInSortedList(listFromArray([2, 3, 4]), newNode(1));
  assert.deepEqual(listToArray(front), [1, 2, 3, 4]);

  const middle = insertInSortedList(listFromArray([1, 3, 4]), newNode(2));
  assert.deepEqual(listToArray(middle), [1, 2, 3, 4]);

  const empty = insertInSortedList(null, newNode(1));
  assert.deepEqual(listToArray(empty), [1]);
});

test('DLLInsert and DLLDelete keep previous links consistent', () => {
  let head = dllFromArray([1, 3]);
  head = DLLInsert(head, newDLLNode(2), 2);
  assert.deepEqual(dllToArray(head), [1, 2, 3]);
  assertDLLLinks(head);

  head = DLLInsert(head, newDLLNode(0), 1);
  assert.deepEqual(dllToArray(head), [0, 1, 2, 3]);
  assert.equal(head.getPrevious(), null);
  assertDLLLinks(head);

  head = DLLDelete(head, 1);
  assert.deepEqual(dllToArray(head), [1, 2, 3]);
  assert.equal(head.getPrevious(), null);
  assertDLLLinks(head);

  head = DLLDelete(head, 2);
  assert.deepEqual(dllToArray(head), [1, 3]);
  assertDLLLinks(head);
});

test('circular list inserters return the head and stay circular', () => {
  const front = InsertAtBeginingInCLL(circularFromArray([2, 3]), newNode(1));
  assert.deepEqual(circularToArray(front), [1, 2, 3]);

  const end = InsertAtEndInCLL(circularFromArray([1, 2]), newNode(3));
  assert.deepEqual(circularToArray(end), [1, 2, 3]);

  const emptyFront = InsertAtBeginingInCLL(null, newNode(1));
  assert.deepEqual(circularToArray(emptyFront), [1]);

  const emptyEnd = InsertAtEndInCLL(null, newNode(1));
  assert.deepEqual(circularToArray(emptyEnd), [1]);
});

test('CLL delete functions return the new head and handle single nodes', () => {
  const front = DeleteFrontNodeFromCLL(circularFromArray([1, 2, 3]));
  assert.deepEqual(circularToArray(front), [2, 3]);

  const last = DeleteLastNodeFromCLL(circularFromArray([1, 2, 3]));
  assert.deepEqual(circularToArray(last), [1, 2]);

  const lastOfFront = DeleteLastNodeFromCLL(front);
  assert.deepEqual(circularToArray(lastOfFront), [2]);

  assert.equal(DeleteFrontNodeFromCLL(circularFromArray([1])), null);
  assert.equal(DeleteLastNodeFromCLL(circularFromArray([1])), null);
  assert.equal(DeleteFrontNodeFromCLL(null), null);
  assert.equal(DeleteLastNodeFromCLL(null), null);
});

test('splitNode handles single-node and even/odd circular lists', () => {
  const single = {};
  splitNode(circularFromArray([1]), single);
  assert.deepEqual(circularToArray(single.head1), [1]);
  assert.equal(single.head2, null);

  const even = {};
  splitNode(circularFromArray([1, 2, 3, 4]), even);
  assert.deepEqual(circularToArray(even.head1), [1, 2]);
  assert.deepEqual(circularToArray(even.head2), [3, 4]);

  const odd = {};
  splitNode(circularFromArray([1, 2, 3, 4, 5]), odd);
  assert.deepEqual(circularToArray(odd.head1), [1, 2, 3]);
  assert.deepEqual(circularToArray(odd.head2), [4, 5]);

  const empty = {};
  splitNode(null, empty);
  assert.equal(empty.head1, null);
  assert.equal(empty.head2, null);
});

test('two- and three-stack helpers report emptiness for every stack', () => {
  const two = arrayWithTwoStack(4);
  assert.equal(two.isEmpty(1), true);
  assert.equal(two.isEmpty(2), true);
  two.pushInStack(1, 'a');
  assert.equal(two.isEmpty(1), false);
  assert.equal(two.isEmpty(2), true);
  two.pushInStack(2, 'b');
  assert.equal(two.isEmpty(2), false);

  const three = arrayWithThreeStack(6);
  assert.equal(three.isEmpty(1), true);
  assert.equal(three.isEmpty(2), true);
  assert.equal(three.isEmpty(3), true);
  three.pushInStack(2, 'b');
  assert.equal(three.isEmpty(2), false);
  three.pushInStack(3, 'c');
  assert.equal(three.isEmpty(3), false);
  assert.equal(three.top(3), 'c');
  assert.equal(three.popFromStack(3), 'c');
  assert.equal(three.isEmpty(3), true);
});

// ===== Chapter 04 — Expressions =====

test('infix2postfix respects operator precedence and parentheses', () => {
  assert.equal(infix2postfix('2*3+4'), '23*4+');
  assert.equal(infix2postfix('2+3*4'), '234*+');
  assert.equal(infix2postfix('(2+3)*4'), '23+4*');
  assert.equal(infix2postfix(' 2 * 3 + 4 '), '23*4+');
});

test('infixEvaluation respects operator precedence and parentheses', () => {
  assert.equal(infixEvaluation('2*3+4'), 10);
  assert.equal(infixEvaluation('2+3*4'), 14);
  assert.equal(infixEvaluation('(2+3)*4'), 20);
  assert.equal(infixEvaluation(' 2 * 3 + 4 '), 10);
});

test('isPalindromeUsingStack returns false without the X marker', () => {
  assert.equal(isPalindromeUsingStack('abXba'), true);
  assert.equal(isPalindromeUsingStack('abXab'), false);
  assert.equal(isPalindromeUsingStack('ab'), false);
});

// ===== Chapter 05 — Queues =====

test('ArrayQueue reports the correct size when empty and wrapped', () => {
  const queue = new ArrayQueue(3);
  assert.equal(queue.getQueueSize(), 0);
  queue.enQueue(1);
  queue.enQueue(2);
  assert.equal(queue.getQueueSize(), 2);
  assert.equal(queue.deQueue(), 1);
  queue.enQueue(3);
  assert.equal(queue.getQueueSize(), 2);
  assert.equal(queue.deQueue(), 2);
  assert.equal(queue.deQueue(), 3);
  assert.equal(queue.getQueueSize(), 0);
});

test('DynArrayQueue reports size and preserves FIFO order after resizing', () => {
  const queue = new DynArrayQueue(3);
  assert.equal(queue.getQueueSize(), 0);
  for (let i = 1; i <= 10; i++) {
    queue.enQueue(i);
    assert.equal(queue.getQueueSize(), i);
  }
  for (let i = 1; i <= 10; i++) {
    assert.equal(queue.deQueue(), i);
  }
  assert.equal(queue.getQueueSize(), 0);
});

// ===== Chapter 10 — Counting and elections =====

test('numberAppearedMaximum finds a winner at any position', () => {
  assert.equal(numberAppearedMaximum([1, 2, 2]), 2);
  assert.equal(numberAppearedMaximum([2, 2, 1]), 2);
  assert.equal(numberAppearedMaximum([1, 2, 3]), 1);
  assert.equal(numberAppearedMaximum([]), null);
});

test('improvedCheckWhoWinsTheElection returns the candidate', () => {
  assert.equal(improvedCheckWhoWinsTheElection([5, 5, 3]), 5);
  assert.equal(improvedCheckWhoWinsTheElection([3, 5, 5]), 5);
  assert.equal(improvedCheckWhoWinsTheElection([1, 1, 2, 2, 2]), 2);
  assert.equal(improvedCheckWhoWinsTheElection([1, 2, 3]), 1);
  assert.equal(improvedCheckWhoWinsTheElection([]), null);
});

// ===== Chapter 11 — Missing and repeated numbers =====

test('counting-based repeated elements include the maximum value', () => {
  assert.deepEqual(printRepeatedElementUsingCounting([1, 2, 2, 3, 3], 3), [2, 3]);
  assert.deepEqual(printRepeatedElementUsingCounting([1, 1, 2, 2], 2), [1, 2]);
});

test('sorting-based repeated elements include the maximum value', () => {
  assert.deepEqual(printRepeatedElementsUsingSorting([1, 2, 2, 3, 3], 3), [2, 3]);
  assert.deepEqual(printRepeatedElementsUsingSorting([1, 1, 2, 2], 2), [1, 2]);
});

test('missing-number functions detect interior and trailing missing values', () => {
  const quadraticFinders = [findMissingNumberBruteForse, improvedFindMissingNumber, findMissingNumberUsingXOR];
  for (const finder of quadraticFinders) {
    assert.equal(finder([1, 2, 4, 5]), 3, finder.name);
    assert.equal(finder([1, 2, 3]), 4, finder.name);
    assert.equal(finder([]), 1, finder.name);
    assert.equal(finder([1, 2, 3], 4), 4, finder.name);
  }

  assert.equal(findMissingNumberUsingSorting([1, 2, 4, 5]), 3);
  assert.equal(findMissingNumberUsingSorting([1, 2, 3]), 4);
  assert.equal(findMissingNumberUsingSorting([]), 1);
  assert.equal(findMissingNumberUsingSorting([1, 2, 3], 4), 4);
});
