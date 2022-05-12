/*
 * @Author: changluo
 * @Description: 
 */
//                    1
//                 /     \    
//                2       3   
//               / \     / \
//              4   5   6   7   

const root = {
    val: '1',
    left: {
        val: '2',
        left: {
            val: '4',
            left: null,
            right: null
        },
        right: {
            val: '5',
            left: null,
            right: null
        }
    },
    right: {
        val: '3',
        left: {
            val: '6',
            left: null,
            right: null
        },
        right: {
            val: '7',
            left: null,
            right: null
        }
    }
}
// 递归
// 前序遍历
const preorder = (root) => {
    const res = []
    const traverse = (node) => {
        if (node === null) return
        res.push(node.val)
        traverse(node.left)
        traverse(node.right)
    }
    traverse(root)
    return res
}
// console.log('preorder',preorder(root));

// 中序
const inorder = (root) => {
    const res = []
    const traverse = (node) => {
        if (node === null) return
        traverse(node.left)
        res.push(node.val)
        traverse(node.right);
    }
    traverse(root)
    return res
}
// console.log('inorder',inorder(root));

// 后序
const postorder = (root) => {
    const res = []
    const traverse = (node) => {
        if (node === null) return
        traverse(node.left)
        traverse(node.right)
        res.push(node.val);
    }
    traverse(root)
    return res;
}
// console.log('postorder',postorder(root));

// 栈 - 层序
const levelorder = (root) => {
    if (root === null) return
    const res = []
    const stack = []
    stack.push(root);
    while (stack.length > 0) {
        const node = stack.shift();
        res.push(node.val);
        if (node.left !== null) stack.push(node.left);
        if (node.right !== null) stack.push(node.right);
    }
    return res
}
// console.log('levelorder',levelorder(root));

// 栈 - 后序 
// [4,5,2,6,7,3,1]
// [4,5,2,6,7,3,1]
// [2,3]
// 
//                    1
//                 /     \    
//                2       3   
//               / \     / \
//              4   5   6   7  
const postorder1 = (root) => {
    if(root===null) return
    const res = [];
    const stack = [];
    stack.push(root);
    while(stack.length){
        const node = stack.pop()
        res.unshift(node.val)
        if(node.left){
            stack.push(node.left)
        }
        if(node.right){
            stack.push(node.right)
        }
    }
    return res
}
var postorderTraversal = function(root) {
    if(root === null) return []
    const res = []
    const stack = []
    stack.push(root)
    while(stack.length){
        const node = stack.pop();
        res.unshift(node.val);
        if(node.left) stack.push(node.left)
        if(node.right)  stack.push(node.right)
    }
    return res;
};
// console.log('postorderTraversal',postorderTraversal(root));


// 后序
// 1. 从右向左逆向遍历，反向前序遍历，因此同样可用于中序遍历
//                    1
//                 /     \    
//                2       3   
//               / \     / \
//              4   5   6   7  
// postorder-res  [4,5,2,6,7,3,1]
//stack []
// inorder-res  [4,2,5,1,6,3,7] 
function postorderTraversal1(root) {
    const result = [];
    const stack = [];
    
    while (stack.length || root) {
      while (root) {
        // postorder
        // result.unshift(root.val);
        stack.push(root);
        root = root.right;
      }
      
      root = stack.pop();
      // inorder
      result.unshift(root.val);
      root = root.left;
    }
    
    return result;
  }
  
console.log('postorderTraversal1',postorderTraversal1(root));
 