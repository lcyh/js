
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
    { type: 10, id: 180, parentId: null, title: 'title1', name: '标题10' },
    { type: 11, id: 181, parentId: 200, title: 'title1', name: '标题11' },
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
            { type: 1, id: 15, parentId: 11, title: 'title1', name: '标题4' },
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
    // 根据 id 维度分类
    let parentIdList = {}
    let selfIdList = {}
    let noParentIdList = []

    arr.forEach((item) => {
        if (item.parentId) {
            parentIdList[item.parentId] ? parentIdList[item.parentId].push(item) : parentIdList[item.parentId] = [item]
        } else {
            noParentIdList.push(item)
        }
        selfIdList[item.id] = item

    })
    console.log('parentIdList',parentIdList);
    console.log('noParentIdList',noParentIdList);
    return noParentIdList.map((item) => {
        let checkChildren = getChildren(item.id, parentIdList)
        checkChildren ? item.children = checkChildren : '';
        return item
    })
}
function getChildren(id, parentIdList) {
    if (parentIdList[id]) {
        let childrenArr = parentIdList[id].map((item) => {
            let checkChildren = getChildren(item.id, parentIdList)
            checkChildren ? item.children = checkChildren : '';
            return item
        })
        return childrenArr;
    } else {
        return false;
    }

}

let result = handleGenerateData(arr);
console.log('result: ', JSON.stringify(result,null,2))


