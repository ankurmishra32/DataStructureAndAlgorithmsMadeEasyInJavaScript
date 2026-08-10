// Smoke tests for the DataStructureAndAlgorithmsMadeEasyInJavaScript exercises.
// Run with: node --test tests/
//
// Uses Node's built-in test runner (node:test) — no extra dependencies.
// Each test exercises one algorithm from a chapter folder.

import { test } from 'node:test';
import assert from 'node:assert/strict';

// ----- Helpers -----
import ListNode from '../madeeasy/chapter03/linkList.js';

function listFromArray(arr) {
  let head = null;
  let tail = null;
  for (const v of arr) {
    const node = new ListNode();
    node.setData(v);
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

// ===== Chapter 2 — Recursion =====

test('factorial of 5 is 120', async () => {
  const { Fact } = await import('../madeeasy/chapter02/factorial.js');
  assert.equal(Fact(5), 120);
  assert.equal(Fact(0), 1);
  assert.equal(Fact(1), 1);
});

// ===== Chapter 3 — Linked Lists =====

test('ListNode builds and traverses', () => {
  const list = listFromArray([1, 2, 3]);
  assert.deepEqual(listToArray(list), [1, 2, 3]);
});

test('ListLength returns correct length', async () => {
  const ListLength = (await import('../madeeasy/chapter03/listLength.js')).default;
  const list = listFromArray([10, 20, 30, 40]);
  assert.equal(ListLength(list), 4);
});

test('findMiddle returns the middle node', async () => {
  const findMiddle = (await import('../madeeasy/chapter03/findMiddle.js')).default;
  const odd  = listFromArray([1, 2, 3, 4, 5]);
  const even = listFromArray([1, 2, 3, 4]);
  assert.equal(findMiddle(odd).getData(),  3);
  assert.equal(findMiddle(even).getData(), 3); // author's impl returns index-1 mid
});

test('findMiddleByLength returns the middle node', async () => {
  const findMiddleByLength = (await import('../madeeasy/chapter03/findMiddleByLength.js')).default;
  const odd  = listFromArray([1, 2, 3, 4, 5]);
  const even = listFromArray([1, 2, 3, 4]);
  assert.equal(findMiddleByLength(odd).getData(),  3);
  assert.equal(findMiddleByLength(even).getData(), 3);
});

test('reversePairIterative swaps pairs', async () => {
  const reversePairIterative = (await import('../madeeasy/chapter03/reversePairIterative.js')).default;
  const list = listFromArray([1, 2, 3, 4, 5]);
  const reversed = reversePairIterative(list);
  assert.deepEqual(listToArray(reversed), [2, 1, 4, 3, 5]);
});

// ===== Chapter 4 — Stacks =====

test('LLStack push and pop', async () => {
  const LLStack = (await import('../madeeasy/chapter04/chapter 04.js')).default;
  const s = new LLStack();
  s.pushInStack(1); s.pushInStack(2); s.pushInStack(3);
  assert.equal(s.popFromStack(), 3);
  assert.equal(s.popFromStack(), 2);
  assert.equal(s.popFromStack(), 1);
  assert.equal(s.isEmpty(), true);
});

// ===== Chapter 5 — Queues =====

test('ArrayQueue enqueue and dequeue', async () => {
  const { default: ArrayQueue } = await import('../madeeasy/chapter05/chapter 05.js');
  const q = new ArrayQueue(5);
  q.enQueue('a'); q.enQueue('b'); q.enQueue('c');
  assert.equal(q.deQueue(), 'a');
  assert.equal(q.deQueue(), 'b');
  assert.equal(q.deQueue(), 'c');
  assert.equal(q.isEmpty(), true);
});

// ===== Chapter 10 — Sorting =====

function expectSorted(label, fn) {
  test(label, () => {
    const input = [5, 2, 8, 1, 9, 3, 7, 4, 6, 0];
    const expected = [...input].sort((a, b) => a - b);
    fn(input);
    assert.deepEqual(input, expected);
  });
}

test('bubbleSort sorts in place', async () => {
  const bubbleSort = (await import('../madeeasy/chapter10/bubbleSort.js')).default;
  const a = [5, 2, 8, 1, 9, 3, 7, 4, 6, 0];
  bubbleSort(a);
  assert.deepEqual(a, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
});

test('bubbleSortImproved sorts in place', async () => {
  const bubbleSortImproved = (await import('../madeeasy/chapter10/bubbleSortImproved.js')).default;
  const a = [5, 2, 8, 1, 9, 3, 7, 4, 6, 0];
  bubbleSortImproved(a);
  assert.deepEqual(a, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
});

test('selectionSort sorts in place', async () => {
  const selectionSort = (await import('../madeeasy/chapter10/selectionSort.js')).default;
  const a = [5, 2, 8, 1, 9, 3, 7, 4, 6, 0];
  selectionSort(a);
  assert.deepEqual(a, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
});

test('insertionSort sorts in place', async () => {
  const insertionSort = (await import('../madeeasy/chapter10/insertionSort.js')).default;
  const a = [5, 2, 8, 1, 9, 3, 7, 4, 6, 0];
  insertionSort(a);
  assert.deepEqual(a, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
});

test('quickSort sorts in place', async () => {
  const quickSort = (await import('../madeeasy/chapter10/quickSort.js')).default;
  const a = [5, 2, 8, 1, 9, 3, 7, 4, 6, 0];
  quickSort(a);
  assert.deepEqual(a, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
});

test('mergeSort sorts in place (was buggy — copy-back fix verified)', async () => {
  const mergeSort = (await import('../madeeasy/chapter10/mergeSort.js')).default;
  const a = [5, 2, 8, 1, 9, 3, 7, 4, 6, 0];
  mergeSort(a);
  assert.deepEqual(a, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
});

test('shellSort sorts in place', async () => {
  const shellSort = (await import('../madeeasy/chapter10/shellSort.js')).default;
  const a = [5, 2, 8, 1, 9, 3, 7, 4, 6, 0];
  shellSort(a);
  assert.deepEqual(a, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
});

test('bucketSort sorts in place', async () => {
  const bucketSort = (await import('../madeeasy/chapter10/bucketSort.js')).default;
  const a = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
  bucketSort(a);
  assert.deepEqual(a, [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]);
});

// ===== Chapter 11 — Searching =====

test('unorderedLinearSearch finds item', async () => {
  const { unorderedLinearSearch } = await import('../madeeasy/chapter11/chapter 11.js');
  assert.equal(unorderedLinearSearch([4, 2, 7, 1], 7), 2);
  assert.equal(unorderedLinearSearch([4, 2, 7, 1], 99), -1);
});

test('binarySearch finds item', async () => {
  const { binarySearchIterative } = await import('../madeeasy/chapter11/chapter 11.js');
  assert.equal(binarySearchIterative([1, 2, 3, 4, 5, 6, 7, 8], 5), 4);
  assert.equal(binarySearchIterative([1, 2, 3, 4, 5, 6, 7, 8], 99), -1);
});

// ===== Chapter 19 — Dynamic Programming =====

test('recursiveFibonacci returns correct sequence', async () => {
  const { recursiveFibonacci, fibonacciBottomUp, fibonacciTopDown, improvedFibonacci } =
    await import('../madeeasy/chapter19/chapter 19.js');
  const expected = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55];
  for (let n = 0; n < expected.length; n++) {
    assert.equal(recursiveFibonacci(n), expected[n], `recursive n=${n}`);
    assert.equal(fibonacciBottomUp(n),  expected[n], `bottom-up n=${n}`);
    assert.equal(fibonacciTopDown(n),   expected[n], `top-down n=${n}`);
    assert.equal(improvedFibonacci(n),  expected[n], `improved n=${n}`);
  }
});

test('fibonacciBottomUp is independent across calls (was bug — global state fix)', async () => {
  const { fibonacciBottomUp } = await import('../madeeasy/chapter19/chapter 19.js');
  // Call with a small n first (would poison the old global cache), then with larger.
  assert.equal(fibonacciBottomUp(3), 2);
  assert.equal(fibonacciBottomUp(10), 55);
  assert.equal(fibonacciBottomUp(3), 2); // still correct after the larger call
});

test('LCSLengthUsingDP works for repeated calls (was bug — global state fix)', async () => {
  const { LCSLengthUsingDP } = await import('../madeeasy/chapter19/chapter 19.js');
  assert.equal(LCSLengthUsingDP('ABCBDAB', 'BDCAB'), 4);
  assert.equal(LCSLengthUsingDP('AGGTAB', 'GXTXAYB'), 4);
  assert.equal(LCSLengthUsingDP('ABCBDAB', 'BDCAB'), 4); // still 4 after second call
});
