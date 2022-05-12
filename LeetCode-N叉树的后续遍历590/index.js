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
输出：[5,6,3,2,4,1]
[1]
[3,2,4]->[5,6]
[5,6,3,2,4,1]
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
// 递归
const postOrder = (root) => {
    const res = []
    function traverse(root) {
        if (root === null) {
            return
        }
        root.children.forEach((item) => {
            traverse(item)
        })
        res.push(root.val)
    }
    traverse(root)
    return res
}
// console.log('postOrder', postOrder(root));

// 迭代-后续遍历-栈
const postOrder1 = (root) => {
    if (root === null) return null
    const res = []
    const stack = []
    stack.push(root)
    while (stack.length) {
        const node = stack.pop();
        res.unshift(node.val)
        if (node.children) {
            for (let child of node.children) {
                stack.push(child)
            }
        }
    }
    return res;
}
// console.log('postOrder1', postOrder1(root));


var postorder2 = function (root) {
    let result = []; // 保存结果
    let stack = []; // 使用栈遍历
    root && stack.push(root); // 二叉树存在时才开始遍历
  
    // 遍历二叉树，直到清空栈，即为遍历了所有节点
    while (stack.length) {
      // 从栈中弹出元素，顺序为从上到下，从右到左
      const node = stack.pop();
  
      // 将节点的值插入到结果数组的前端
      // 保证了输出结果的顺序为从下到上，从左到右
      result.unshift(node.val);
  
      // 将子节点按照从左到右入栈，保证了出栈顺序
      if (node.children) {
        for (const child of node.children) {
          stack.push(child);
        }
      }
    }
  
    return result;
  };
  
  console.log('postorder2', postorder2(root));
