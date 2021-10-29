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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  const result = [];

  if (!root) return result;

  const queue = [root];

  while (queue.length) {
    let len = queue.length;
    result.push(queue.map((node) => node.val));

    while (len--) {
      let node = queue.shift();
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }

  return result;
};

const root = [3,9,20,null,null,15,7]
// Output: [[3],[9,20],[15,7]]
const result = levelOrder(root);
console.log('result: ', result);
