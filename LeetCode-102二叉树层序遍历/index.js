/*
 * https://leetcode-cn.com/problems/binary-tree-level-order-traversal/
 * 
给你一个二叉树，请你返回其按 层序遍历 得到的节点值。 （即逐层地，从左到右访问所有节点）。
示例：

示例：
二叉树：[3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
返回其层序遍历结果：

[
  [15,7]
  [9,20],
  [3],
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
// 层序遍历-二维数组-栈
const levelTree = (root) => {
    if (root === null) return []
    const res = [];
    const stack = [];
    stack.push(root);
    while (stack.length) {
        const levelSize = stack.length;
        const arr = [];
        for (let i = 0; i < levelSize; i++) {
            const node = stack.shift()
            arr.push(node.val)
            if (node.left) stack.push(node.left)
            if (node.right) stack.push(node.right)
        }
        res.push(arr)
    }
    return res;
}
console.log('levelTree', levelTree(root));




function pipe(addOne, addTwo, addThree, addFour) {
    const arr = [addOne, addTwo, addThree, addFour]
    return arr.reduce((pre, cur) => {
        return function (...args) {
            return pre(cur(...args))
        }
    })
}
function addOne(num) {
    console.log('1',num);
    return 1 + num
}
function addTwo(num) {
    console.log('2',num);
    return 2 + num
}
function addThree(num) {
    console.log('3',num);
    return 3 + num
}
function addFour(num) {
    console.log('4',num);
    return 4 + num
}
const fn = pipe(addOne, addTwo, addThree, addFour); // 传入pipe的四个函数都是已实现的
console.log('fn(1)', fn(1));; // 1 + 1 + 2 + 3 + 4 = 11，输出11



