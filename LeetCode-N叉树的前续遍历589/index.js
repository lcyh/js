/*
 * https://leetcode-cn.com/problems/invert-binary-tree/
 * 
给定一个 N 叉树，返回其节点值的 后序遍历 
N 叉树 在输入中按层序遍历进行序列化表示，每组子节点由空值 null 分隔（请参见示例）。

示例：

输入：

      1
   /  |  \
  3   2   4
 / \   
5   6 

输入：root = [1,null,3,2,4,null,5,6]
输出：[1,3,5,6,2,4]
[4,2,6,5]
 */
function TreeNode(val, children) {
    this.val = val;
    this.children = children;
}
const root = {
    val: 1,
    children: [
        {
            val: 3,
            children: [
                { val: 5, children: [] },
                { val: 6, children: [] },
            ]
        },
        { val: 2, children: [] },
        { val: 4, children: [] },
    ]

}
const inOrder = (root) => {
    const res = []
    function traverse(node) {
        if (node === null) {
            return
        }
        res.push(node.val)
        if (node.children) {
            node.children.forEach((item) => {
                traverse(item)
            })
        }
    }
    traverse(root)
    return res
}
console.log('inOrder', inOrder(root));


// 前序-栈-迭代
//      1
//   /  |  \
//  3   2   4
// / \   
//5   6 
// res [1,3,5,6,2,4]
// stack []
let preOrder = (root) => {
    if (root === null) return []
    const res = []
    const stack = [];
    stack.push(root);
    while (stack.length) {
        const node = stack.pop();
        res.push(node.val)
        if (node.children) {
            for (let i = node.children.length - 1; i >= 0; i--) {
                stack.push(node.children[i])
            }
        }
    }
    return res;
}
console.log('preOrder', preOrder(root));


function preOrder1(root) {
    const res = [];
    const traverse = (node) => {
        if (node === null) return
        res.push(node.val)
        if (node.children.length) {
            for (let i = 0; i < node.children.length; i++) {
                traverse(node.children[i])
            }
        }
    }
    traverse(root)
    return res
}
console.log('preOrder1', preOrder1(root));
