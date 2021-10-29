/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function (root) {
  const result = [];
  if (!root) return result;

  const queue = [root];

  while (queue.length) {
    let len = queue.length;
    result.push(queue[queue.length - 1].val);

    while (len--) {
      let node = queue.shift();
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }
  return result;
};

const root = [1, 2, 3, null, 5, null, 4];
// Output: [1,3,4]
const result = rightSideView(root);
console.log('result: ', result);
