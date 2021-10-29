/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

//  Input: l1 = [2,4,3], l2 = [5,6,4]
//  Output: [7,0,8]
//  Explanation: 342 + 465 = 807.

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var addTwoNumbers = (l1, l2) => {

    l1 = [...l1];
    l2 = [...l2];

    const makeNum = (arr) => {
    let num = '';
    let reversed = arr.reverse();
    reversed.forEach((item) => {
      num = num + item.toString();
    });
    return num;
  };
  const l1Num = makeNum(l1);
  const l2Num = makeNum(l2);
  let sum = parseInt(l1Num) + parseInt(l2Num);
  return sum
    .toString()
    .split('')
    .map((i) => parseInt(i))
    .reverse();
};

(l1 = [2, 4, 3]), (l2 = [5, 6, 4]);
// let l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]

const answer = addTwoNumbers(l1, l2);
console.log('answer: ', answer);
