/*
 * @Author: changluo
 * @Description: 二叉树深度  最大和最小,二叉树节点个数
 */

//                  root
//         left-1           right-1
//    left-2  right-2      

const root = {
    val: 'root',
    left: {
        val: 'left-1',
        left: {
            val: 'left-2',
            left: null,
            right: null
        },
        right: {
            val: 'right-2',
            left: null,
            right: null
        }
    },
    right: {
        val: 'right-1',
        left: null,
        right: null
    }
}
// 求root的节点数量
function getNodeNum(node) {
    if (node === null) return 0;
    return getNodeNum(node.left) + getNodeNum(node.right) + 1;
}
// console.log(getNodeNum(root)); // 5

//求root节点的最大深度(最大层数)
function getMaxDepth(node) {
    if (node === null) return 0;
    let left = getMaxDepth(node.left);
    let right = getMaxDepth(node.right);
    return Math.max(left, right) + 1;
}
// console.log(getMaxDepth(root));

//求root节点的最小深度
function getMinDepth(node) {
    if (node === null) return 0;
    let left = getMinDepth(node.left);
    let right = getMinDepth(node.right);
    return Math.min(left, right) + 1;
}
console.log(getMinDepth(root));


function getMaxDepth1(node) {
    if (!node) return 0;
    let left = getMaxDepth1(node.left);
    let right = getMaxDepth1(node.right);
    return Math.max(left, right) + 1;
}
console.log(getMaxDepth1(root));


// 节点个数
function getNodeNum1(node) {
    if (node === null) return 0;
    let left = node.left;
    let right = node.right;
    return getNodeNum(left) + getNodeNum(right) + 1;
}
// console.log('getNodeNum1', getNodeNum1(root));
// 最大深度
function getMaxDepth2(node) {
    if (node === null) return 0;
    let left = node.left;
    let right = node.right;
    return Math.max(getMaxDepth2(left), getMaxDepth2(right)) + 1
}
// console.log('getMaxDepth2', getMaxDepth2(root));

// 最小深度
function getMinDepth2(node) {
    if (node === null) return 0
    let left = node.left;
    let right = node.right;
    return Math.min(getMinDepth2(left), getMinDepth2(right)) + 1;
}
console.log('getMinDepth2',getMinDepth2(root));


function getNodeNum2(node){
    if(node === null) return 0;
    return getNodeNum2(node.left) + getNodeNum2(node.right) + 1;
}
console.log('getNodeNum2',getNodeNum2(root));