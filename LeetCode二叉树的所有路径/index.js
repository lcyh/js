/*
 * @Author: changluo
 * 给你一个二叉树的根节点 root ，按 任意顺序 ，返回所有从根节点到叶子节点的路径。
   叶子节点 是指没有子节点的节点。

输入：root = [1,2,3,null,5]
输出：["1->2->5","1->3"]  

输入：root = [1]
输出：["1"]

//       5
//      / \
//     4   6
//    /   / \
//   12  11  6
//  /  \    / \
// 9    1  5   1

         1
//     /   \
//    2     3
//     \   
//      5   
 */

const root = {
    val: 5,
    left: {
        val: 4,
        left: {
            val: 12,
            left: {
                val: 9,
                left: null,
                right: null
            },
            right: {
                val: 1,
                left: null,
                right: null
            }
        },
        right: null
    },
    right: {
        val: 6,
        left: {
            val: 11,
            left: null,
            right: null
        },
        right: {
            val: 6,
            left: {
                val: 5,
                left: null,
                right: null
            },
            right: {
                val: 1,
                left: null,
                right: null
            }
        }
    }
}
const root1 = {
    val: 1,
    left: {
        val: 2,
        left: null,
        right: {
            val: 5,
            left: null,
            right: null
        }
    },
    right: {
        val: 3,
        left: null,
        right: null
    }
}
function findPath(node) {
    let res = [];
    let path = []
    const fn = (node) => {
        if (node === null) return;
        path.push(node.val)
        if (node.left === null && node.right === null) {
            res.push([...path]) // [1,2,5] [1,3]
        }
        fn(node.left); // 1,2,5
        fn(node.right) // 3
        path.pop(); // []
    }
    fn(node)
    console.log('path---', path);
    return res;
}
console.log('findPath', findPath(root1));

function binaryTreePaths(root) {
    if (root === null) return []
    const res = [];
    const findPath = (node, path = '') => {
        if (node === null) return
        path += node.val // '1->2->5'
        if (node.left === null && node.right === null) {
            res.push(path)  // '1->2->5' '1->3'
        } else {
            path += '->'
            findPath(node.left, path) //'1->2->5'
            findPath(node.right, path); //'1->3'
        }
        return res
    }
    return findPath(root)
}
console.log('binaryTreePaths', binaryTreePaths(root1));


//       1
//     /   \
//    2     3
//     \   
//      5   
function binaryTreePaths1(root) {
    const res = [];
    const findPath = (node, path = '') => {
        if (node === null) return
        path += node.val
        if (node.left === null && node.right === null) {
            res.push(path)
        } else {
            path += '->'
            findPath(node.left, path)
            findPath(node.right, path)
        }
    }
    findPath(root)
    return res;
}
console.log('binaryTreePaths111', binaryTreePaths1(root1));
