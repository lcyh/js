/*
 * @Author: changluo
 * @Description: 二叉树  preOrder  inOrder postOrder 
 */
// 前序
            //                  root
            //         left-1           right-1
            //    left-2  right-2      

const root = {
    val:'root',
    left:{
        val:'left-1',
        left:{
            val:'left-2',
            left:null,
            right:null
        },
        right:{
            val:'right-2',
            left:null,
            right:null
        }
    },
    right:{
        val:'right-1',
        left:null,
        right:null
    }
}
// 递归
function BineryTree(root){
    let res = [];
    const preOrderTraverseNode=(node)=>{
        if(node===null) return;
        // 如果node.left === null,preOrderTraverseNode(node.left)这个函数就会被 return终止函数,
        // 然后接着往下执行preOrderTraverseNode(node.right)
        res.push(node.val);
        preOrderTraverseNode(node.left); 
        preOrderTraverseNode(node.right);
    }
    preOrderTraverseNode(root);
    return res;
}
console.log('BineryTree(root)',BineryTree(root));

// 栈 ->先进后出栈,前序遍历的顺序是:根->左->右,所以先把右入栈再把左入栈,然后左先出栈,右后出栈,[].pop每次取出最后一格
function preOrderTraverseNode1(root){
    let stack = [];
    let res = [];
    if(root ===null) return res;
    stack.push(root);
    while(stack.length>0){
        let currentNode = stack.pop(); // 第一个是root节点
        res.push(currentNode.val);// 先根,再左,最后右
        if(currentNode.right!==null){
            stack.push(currentNode.right);// 先把右边的入栈,先进后出栈
        }
        if(currentNode.left!==null){
            stack.push(currentNode.left);// 再把左边的入栈,后进先出栈
        }
    }
    
    return res;
}
console.log('preOrderTraverseNode1-stack',preOrderTraverseNode1(root));

// 层序遍历-先进先出
function levelOrderTraverseNode(root){
    let stack = [];
    let res = [];
    stack.push(root);
    while(stack.length>0){
        let currentNode = stack.shift();
        res.push(currentNode.val);
        if(currentNode.left!==null){
            stack.push(currentNode.left);
        }
        if(currentNode.right!==null){
            stack.push(currentNode.right);
        }
    }
    return res;
}
console.log('levelOrderTraverseNode(root)-层序遍历',levelOrderTraverseNode(root));