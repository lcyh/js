/*
 * @Author: changluo
 * @Description: 输入一棵二叉树和一个整数，打印出二叉树中结点值的和为输入整数的所有路径。
 */
// 给出二叉树如下所示，并给出num=22。
//       5
//      / \
//     4   6
//    /   / \
//   12  11  6
//  /  \    / \
// 9    1  5   1
// 输出：[[5,4,12,1],[5,6,11],[5,6,6,5]]
const root = {
    val: 5,
    left: {
        val: 4,
        left: {
            val: 12,
            left: {
                val:9,
                left:null,
                right:null
            },
            right: {
                val:1,
                left:null,
                right:null
            }
        },
        right: null
    },
    right: {
        val: 6,
        left: {
            val:11,
            left:null,
            right:null
        },
        right: {
            val:6,
            left:{
                val:5,
                left:null,
                right:null
            },
            right:{
                val:1,
                left:null,
                right:null
            }
        }
    }
}
function findPath(node,target){
    let res = [];
    let path = [];
    const fn = (node,target)=>{
        if(node===null) return;
        path.push(node.val);
        target = target - node.val;
        if(target === 0 && node.left ===null && node.right ===null) {
            // res.push(path);// 这种写法不行
            console.log('path',path);
            res.push([...path]); // 浅拷贝 path数组的值
        }
        fn(node.left,target);
        fn(node.right,target);
        path.pop()
    }
    fn(node,target)
    return res;
}
// console.log(findPath(root,22));


var findPath1 = function(root, sum) {
    const path = []
    const ans = []
    function dfs(root, sum) {
        if(!root) return
        path.push(root.val)
        sum -= root.val
        if(!root.left && !root.right && !sum) ans.push([...path])
        dfs(root.left,sum)
        dfs(root.right,sum)
        path.pop()
    }
    dfs(root,sum)
    return ans
};
console.log('findPath1',findPath1(root,22));


// let arr = [];
// arr.push([ 5, 4, 12, 1 ])
// console.log('arr',arr);

function findPath2(root,target){
    let path = [];
    let res = [];
    const dfs = (node,target)=>{
        if(!node) return ;
        target = target - node.val;
        path.push(node.val);
        if(!node.left && !node.right && target===0) res.push([...path]);
        dfs(node.left,target);
        dfs(node.right,target);
        path.pop();
    }
    dfs(root,target);
    return res;
}
console.log('findPath2',findPath2(root,22));
