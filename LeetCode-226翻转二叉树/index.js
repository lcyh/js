/*
 * https://leetcode-cn.com/problems/invert-binary-tree/
 * 
翻转一棵二叉树。
示例：

输入：

     4
   /   \
  2     7
 / \   / \
1   3 6   9

输出：

     4
   /   \
  7     2
 / \   / \
9   6 3   1
 */
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
const root = {
    val: 4,
    left: {
        val: 2,
        left: {
            val: 1,
            left: null,
            right: null
        },
        right: {
            val: 3,
            left: null,
            right: null
        }
    },
    right: {
        val: 7,
        left: {
            val: 6,
            left: null,
            right: null
        },
        right: {
            val: 9,
            left: null,
            right: null
        }
    }
}
const invertTree = (root) => {
    function traverse(root) {
        if (root === null) {
            return null
        } else {
            [root.left, root.right] = [traverse(root.right), traverse(root.left)]
            return root
        }
    }
    return traverse(root)
}
console.log('invertTree', JSON.stringify(invertTree(root), null, 2));