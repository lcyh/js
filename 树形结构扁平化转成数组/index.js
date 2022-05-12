/*
 * @Author: changluo
 * @Description: 树形结构转成对象
 */
let data = [
    {
        id: 1,
        value: 'a',
        children: [
            {
                id: 11,
                value: 'a-a',
                children: [
                    {
                        id: 111,
                        value: 'a-a-a',
                        children: []
                    },
                    {
                        id: 112,
                        value: 'a-a-b',
                        children: []
                    }
                ]
            },
            {
                id: 12,
                value: 'a-b',
                children: []
            }
        ]
    },
    {
        id: 2,
        value: 'b-b',
        children: []
    }
]
function treeToList(data) {
    let res = [];
    const dfs = tree => {
        tree.forEach(item => {
            if (item.children) {
                dfs(item.children)
                delete item.children
            }
            res.push(item)
        })
    }
    dfs(data);
    return res
}
function treeToList1(data) {
    let arr = [];
    function recursion(list) {
        list.forEach((item) => {
            if (item.children) {
                recursion(item.children);
                delete item.children;
            }
            arr.push(item);
        })
    }
    recursion(data);
    return arr;
}
// console.log('treeToList1',treeToList1(data));

// 树扁平化成一维数组
/**
 * 
 * @param {*} data 数组
 * @param {*} level 层级,最外层是0,越往内层,依次加1
 */
function treeToList2(data) {
    const arr = [];
    const flat = (data, level = 0) => {
        data.forEach((item) => {
            if (item.children.length) {
                flat(item.children, level + 1);// 这里仅仅是level+1,并没有将level+1后的值赋值给level
            }
            arr.push({ ...item, level, children: [] });
        })
    }
    flat(data)
    return arr;
}
console.log('treeToList2', JSON.stringify(treeToList2(data), null, 2));

// 实参和新参,闭包
let num = 0;
function fn(level = 0) {
    console.log('level-1', level);
    num++;
    if (num > 0) {
        num -= 2
        fn(level + 1)
        console.log('level-内层', level);
    }
    console.log('level-外层', level);
}
// fn()