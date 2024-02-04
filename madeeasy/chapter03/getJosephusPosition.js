import ListNode from './linkList';
import PrintCircularListData from './printCircularListData';

// Problem-41 Josephus Circle: Josephus Problem (or Josephus permutation) is a theoretical problem
// related to a certain counting-out game. N people have decided to elect a leader by arranging
// themselves in a circle and eliminating every Mth person around the circle. Assume input is circular
// linked list with N nodes and each node has a number [1 - N] associated with it. The head node has number 1 as data.
function getJosephusPosition(N, M) {
  let head = new ListNode();
  // Create a circular linked list containing all the players
  head.setData(1);
  const temp = head;
  for (let i = 2; i <= N; i++) {
    const tmp = new ListNode();
    tmp.setData(i);
    head.setNext(tmp);
    head = head.getNext();
  }
  head.setNext(temp); // Close circular list by pointing last element to first
  head = head.getNext(); // Move head position to a node where node.data = 1
  PrintCircularListData(head); // Only to check how many nodes are there
  for (let i = N; i > 1; i--) {
    for (let j = 0; j < M - 1; j++) { // Because Mth person is at M-1 distance
      head = head.getNext();
    }
    head.setNext(head.getNext().getNext());
  }
  console.log('Last player left standing is: ', head.getData());
}
