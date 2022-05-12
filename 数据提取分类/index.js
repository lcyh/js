/**
* type:0 一级  1 二级  2 三级
* id:自己的id
* parenId 是 父id,
*/
// 需求：将type===1的合并到type===0的对象里，并且将type===2的合并到type===1的对象里

// 原数据
let arr = [

    { type: 1, id: 14, parentId: 11, title: 'title1', name: '标题3' },
    { type: 1, id: 15, parentId: 11, title: 'title1', name: '标题4' },
    { type: 1, id: 16, parentId: 12, title: 'title1', name: '标题5' },
    { type: 2, id: 17, parentId: 14, title: 'title1', name: '标题6' },
    { type: 2, id: 18, parentId: 14, title: 'title1', name: '标题7' },
    { type: 0, id: 11, parentId: null, title: 'title1', name: '标题1' },
    { type: 0, id: 12, parentId: null, title: 'title1', name: '标题2' },
];
// 生成新的数据
let newArr = [
    {
        type: 0,
        id: 11,
        parentId: null,
        title: 'title1',
        name: '标题1',
        children: [
            {
                type: 1,
                id: 14,
                parentId: 11,
                title: 'title1',
                name: '标题3',
                children: [
                    { type: 2, id: 17, parentId: 14, title: 'title1', name: '标题6' },
                    { type: 2, id: 18, parentId: 14, title: 'title1', name: '标题7' },
                ]
            },
            { type: 1, id: 15, parentId: 11, title: 'title1', name: '标题3' },
        ]
    },
    {
        type: 0,
        id: 12,
        parentId: null,
        title: 'title1',
        name: '标题2',
        children: [
            { type: 1, id: 16, parentId: 12, title: 'title1', name: '标题5' },
        ]
    },
]

function handleGenerateData(arr) {
    let menuArr = [];
    let newArr = [...arr];
    newArr.sort((a, b) => a.type - b.type);
    for (let i = 0; i < newArr.length; i++) {
        let item = newArr[i];
        let itemParentId = newArr[i].parentId;
        if (item.type === 0) {
            menuArr.push({ ...item, children: [] });
        } else if (item.type === 1) {
            let index = menuArr.findIndex((i) => i.id === itemParentId)
            menuArr[index].children.push({ ...item, children: [] });
        } else {
            for (let j = 0; j < menuArr.length; j++) {
                let menuItem = menuArr[j];
                if (menuItem.children?.length) {
                    for (let k = 0; k < menuItem.children.length; k++) {
                        let secondItem = menuItem.children[k];
                        if (secondItem.id === item.parentId) {
                            secondItem.children.push(item);
                        }
                    }
                }
            }
        }
    }
    return menuArr;
}
function handleGenerateData2(arr) {
    // 一级
    let menuArr = arr.filter((item) => item.type === 0);
    let newData = menuArr.map((item) => {
        // 二级
        item.children = arr.filter((i) => i.parentId === item.id) || [];
        item.children.map((second) => {
            // 三级
            second.children = arr.filter((k) => k.parentId === second.id);
            return second;
        })
        return item;
    })
    return newData;
}
let result = handleGenerateData(arr);
console.log('result---', JSON.stringify(result, null, 2));
