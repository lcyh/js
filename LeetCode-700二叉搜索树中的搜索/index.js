/*
 * https://leetcode-cn.com/problems/binary-tree-level-order-traversal/
 * 
 二叉搜索树满足如下性质：
左子树所有节点的元素值均小于根的元素值；
右子树所有节点的元素值均大于根的元素值。
据此可以得到如下算法：

若 root 为空则返回空节点；
若 val=root.val，则返回 root；
若 val<root.val，递归左子树；
若 val>root.val，递归右子树。


给定二叉搜索树（BST）的根节点 root 和一个整数值 val。

你需要在 BST 中找到节点值等于 val 的节点。 返回以该节点为根的子树。 如果节点不存在，则返回 null 。

输入：root = [4,2,7,1,3], val = 2
输出：[2,1,3]
/**
         4
       /   \
      2     7
     / \
    1   3
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
        left: null,
        right: null
    }
}
// 输入：root = [4,2,7,1,3], val = 2
// 输出：[2,1,3]
var searchBST = function (root, val) {
    if (root === null) return null
    if (root.val === val) return root
    else if (root.val > val) {
        return searchBST(root.left, val)
    } else {
        return searchBST(root.right, val)
    }
};
console.log('searchBST', searchBST(root,2));



