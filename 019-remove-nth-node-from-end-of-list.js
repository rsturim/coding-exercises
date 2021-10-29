/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let dummy = new ListNode(-Infinity);

  dummy.next = head;
  let front = dummy;
  let back = dummy;

  // advance the front pointer n times;
  for (let i = 0; i < n; i++) {
    front = front.next;
  }

  // move both ahead until the front hits the end
  while (front.next !== null) {
    front = front.next;
    back = back.next;
  }

  // now break the connection
  back.next = back.next.next;
  return dummy.next // <-- this is weird pops, "because we want to return it's head .. and by doing this we "pop" the dummy node
};

const head = [1, 2, 3, 4, 5],
  n = 2;
// Output: [1,2,3,5]

// const head = [1], n = 1
// Output: []

// const head = [1,2], n = 1
// Output: [1]

const result = removeNthFromEnd(head, n);
console.log('result: ', result);
