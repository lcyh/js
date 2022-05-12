/*
 * https://leetcode-cn.com/problems/binary-tree-zigzag-level-order-traversal/
 * 
给定一个二叉树，返回其节点值的锯齿形层序遍历。（即先从左往右，再从右往左进行下一层遍历，以此类推，层与层之间交替进行）。

示例：

示例：
给定二叉树 [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
返回其层序遍历结果：

[
  [3],
  [20,9],
  [15,7]
]
 */
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
const root = {
    val: 3,
    left: {
        val: 9,
        left: null,
        right: null
    },
    right: {
        val: 20,
        left: {
            val: 15,
            left: null,
            right: null
        },
        right: {
            val: 7,
            left: null,
            right: null
        }
    }
}
/**
   3
   / \
  9  20
    /  \
   15   7
 */
// 锯齿形层序遍历-二维数组-栈-> 先从左往右,在从右往左,依次交替
const zigzagLevelOrder = (root) => {
    if (root === null) return []
    const res = [];
    const stack = [];
    let isLeftOrder = true;
    stack.push(root);
    while (stack.length) {
        const levelSize = stack.length;
        const arr = [];
        for (let i = 0; i < levelSize; i++) {
            const node = stack.shift()
            if (isLeftOrder) {
                arr.push(node.val) // 从左往右
            } else {
                arr.unshift(node.val) // 从右往左
            }
            if (node.left) stack.push(node.left)
            if (node.right) stack.push(node.right)
        }
        isLeftOrder = !isLeftOrder // 标记
        res.push(arr)
    }
    return res;
}
console.log('zigzagLevelOrder', zigzagLevelOrder(root));



const zigzagLevelOrder1 = (root) => {
    if (root === null) return
    const res = []
    const stack = []
    let isLeftOrder = true
    stack.push(root)
    while (stack.length) {
        const levelSize = stack.length
        const arr = []
        for (let i = 0; i < levelSize; i++) {
            const node = stack.shift()
            if (isLeftOrder) {
                arr.push(node.val)
            } else {
                arr.unshift(node.val)
            }
            if (node.left) stack.push(node.left)
            if (node.right) stack.push(node.right)
        }
        isLeftOrder = !isLeftOrder
        res.push(arr)
    }
    return res
}
// console.log('zigzagLevelOrder1', zigzagLevelOrder1(root));

const zigzagLevelOrder2 = (root) => {
    if (root === null) return []
    const res = [];
    const stack = [];
    let isLeftOrder = true
    stack.push(root)
    while (stack.length) {
        const levelSize = stack.length
        const arr = [];
        for (let i = 0; i < levelSize; i++) {
            const node = stack.shift()
            if (isLeftOrder) {
                arr.push(node.val)
            } else {
                arr.unshift(node.val)
            }
            if (node.left) stack.push(node.left)
            if (node.right) stack.push(node.right)
        }
        isLeftOrder = !isLeftOrder
        res.push(arr)
    }
    return res
}
console.log('zigzagLevelOrder2', zigzagLevelOrder2(root));
