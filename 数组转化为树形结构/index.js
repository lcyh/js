/*
 * @Author: changluo
 * @Description: 
 */
let arr = [
    {
        id: 1,
        name: '1',
        pid: 0,
    },
    {
        id: 2,
        name: '1-1',
        pid: 1,
    },
    {
        id: 3,
        name: '1-1-1',
        pid: 2,
    },
    {
        id: 4,
        name: '1-2',
        pid: 1,
    },
    {
        id: 5,
        name: '1-2-2',
        pid: 4,
    },
    {
        id: 6,
        name: '1-1-1-1',
        pid: 3,
    },
    {
        id: 7,
        name: '2',
    }
]

// 转化后的结果
//   const res = [
//     {
//       "id": 1,
//       "name": "1",
//       "pid": 0,
//       "children": [
//         {
//           "id": 2,
//           "name": "1-1",
//           "pid": 1,
//           "children": [
//             {
//               "id": 3,
//               "name": "1-1-1",
//               "pid": 2,
//               "children": [
//                 {
//                   "id": 6,
//                   "name": "1-1-1-1",
//                   "pid": 3,
//                   "children": []
//                 }
//               ]
//             }
//           ]
//         },
//         {
//           "id": 4,
//           "name": "1-2",
//           "pid": 1,
//           "children": [
//             {
//               "id": 5,
//               "name": "1-2-2",
//               "pid": 4,
//               "children": []
//             }
//           ]
//         }
//       ]
//     }
//   ]
// 方法1:递归
function handleTree(arr, parentId = 0) {
    let tree = [];
    arr.forEach((item) => {
        if (item.pid === parentId) {
            let vnode = {
                ...item,
                children: handleTree(arr, item.id)
            }
            tree.push(vnode)
        }
    })
    return tree;
}
console.log('handleTree(arr)', JSON.stringify(handleTree(arr), null, 2));

//方法2:不用递归
//主要思路是先把数据转成Map去存储，之后遍历的同时借助对象的引用，直接从Map找对应的数据做存储
function handleTreeToArray(data) {
    const arr = [];
    const map = {};
    for (let i of data) {
        map[i.id] = { ...i, children: [] };
    }
    for (let item of data) {
        // map[item.id] 当前项-子级
        const childItem = map[item.id];
        // 父级
        const parentItem = map[item.pid];
        if (item.pid === 0) {
            arr.push(childItem);
        } else {
            // 通过给parentItem对象的children添加子项,并且引用不变
            parentItem?.children.push(childItem)
        }
    }
    return arr;
}
// console.log('handleTree(arr)',JSON.stringify(handleTreeToArray(arr),null,2));


let source = [
    { id: 1, pid: 0, name: 'body' },
    { id: 2, pid: 1, name: 'title' },
    { id: 4, pid: 1, name: 'title4' },
    { id: 3, pid: 2, name: 'div' }
]

function handleArrayToTree(list, id = 0) {
    const arr = [];
    list.forEach((item) => {
        if (item.pid === id) {
            const obj = {
                ...item,
                children: handleArrayToTree(list, item.id)
            }
            arr.push(obj)
        }
    })
    return arr;
}
console.log('handleArrayToTree', JSON.stringify(handleArrayToTree(source), null, 2));