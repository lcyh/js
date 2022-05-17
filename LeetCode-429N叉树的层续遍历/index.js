/*
 * https://leetcode-cn.com/problems/invert-binary-tree/
 * 
429. N 叉树的层序遍历

给定一个 N 叉树，返回其节点值的层序遍历。（即从左到右，逐层遍历）。
树的序列化输入是用层序遍历，每组子节点都由 null 值分隔（参见示例）

示例：

输入：

      1
   /  |  \
  3   2   4
 / \   
5   6 

输入：root = [1,null,3,2,4,null,5,6]

输出：[[1],[3,2,4],[5,6]]

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

// 迭代-层序遍历-栈
const levelOrder = (root) => {
    if (root === null) return []
    const res = [];
    const stack = [];
    stack.push(root)
    while (stack.length) {
        const levelSize = stack.length;
        const arr = [];
        for (let i = 0; i < levelSize; i++) {
            const node = stack.shift();
            arr.push(node.val)
            if (node.children.length) {
                stack.push(...node.children);
            }
        }
        res.push(arr);
    }
    return res;
}
// console.log('levelOrder', levelOrder(root));




