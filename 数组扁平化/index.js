
// 1.递归
function flatFn(arr, result = []) {
    arr.forEach((item) => {
        if (Array.isArray(item)) {
            flatFn(item, result);
        } else {
            result.push(item);
        }
    })
    return result;
}
// let arr = [[1, 2, 3], [4, 5, [6]], [7]];
// console.log(flatFn(arr));

// 2.reduce
function flat(arr) {
    return arr.reduce((prev, cur) => {
        if (Array.isArray(cur)) {
            prev = prev.concat(flat(cur))
        } else {
            prev = prev.concat(cur);
        }
        return prev;
    }, [])
}
// let arr = [[1, 2, 3], [4, 5, [6]], [7]];
// console.log(flat(arr));

// 3.迭代
function flaten(arr) {
    while ((arr.some((item) => Array.isArray(item)))) {
        arr = [].concat(...arr);
    }
    return arr;
}
let arr = [[1, 2, 3], [4, 5, [6]], [7]];
console.log(flaten(arr));

let arr1 = [[1, 2, 3], [4, 5, [6]], [7]];
function flatten1(arr) {
    while (arr.some((item) => Array.isArray(item))) {
        arr = [].concat(...arr)
    }
    return arr;
}
console.log('flatten1', flatten1(arr1));


let arr = [[1, 2, 3], [4, 5, [6]], [7]];
console.log('...arr', ...arr);// 扁平最外层 [1,2,3] [4,5,[6]] [7]
arr = [].concat([1, 2, 3], [4, 5, [6]], [7]);
console.log('arr', arr); // [1,2,3,4,5,[6],7]

// 将数组扁平化成一级
const list = [
    {
        gameBaseId: 14,
        gameName: "SDK-DEMO-2",
        gameList: [
            {
                gameId: 2,
                sdkTypeName: "哔哩Android-SDK",
                gameName: "SDK-DEMO-2",
                sdkTypeId: 1,
                gameList: [
                    {
                        gameId: 12,
                        sdkTypeName: "测试-哔哩Android-SDK",
                        gameName: "测试SDK-DEMO-2",
                        sdkTypeId: 12,
                    },
                ],
            },
            {
                gameId: 85,
                gameName: "SDK-DEMO-2",
                sdkTypeId: 2,
                sdkTypeName: "哔哩IOS-SDK",
                gameList: [],
            },
        ],
    },
    {
        gameBaseId: 2,
        gameName: "神之刃",
        gameList: [
            {
                gameId: 9,
                gameName: "神之刃",
                sdkTypeId: 1,
                sdkTypeName: "哔哩Android-SDK",
                gameList: [],
            },
            {
                gameId: 334,
                gameName: "神之刃",
                sdkTypeId: 13,
                sdkTypeName: "付费下载",
                gameList: [
                    {
                        gameId: 66,
                        gameName: "测试神之刃",
                        sdkTypeId: 666,
                        sdkTypeName: "测试付费下载",
                    },
                ],
            },
        ],
    },
    {
        gameBaseId: 3,
        gameName: '坎公',
        gameList: []
    }
];
function handleFlat(arr, newArr = []) {
    arr.forEach((item) => {
        let obj = {
            title: item.gameName,
            id: item.gameBaseId || item.gameId,
            gameName: item.sdkTypeName || item.gameName
        }
        if (item.gameList && item.gameList.length) {
            newArr.push(obj);
            handleFlat(item.gameList, newArr);
        } else {
            newArr.push(obj);
        }
    })
    return newArr;
}
let res = handleFlat(list);
console.log('res', res);



function flat(arr) {
    return arr.reduce((pre, cur) => {
        return pre.concat(Array.isArray(cur) ? flat(cur) : cur);
    }, [])
}
let arr = [1, 2, [4, [5, [6]]], [7]]
console.log(flat(arr));


function flatFn(arr) {
    const res = [];
    const recursion = (arr) => {
        arr.forEach((item) => {
            if (Array.isArray(item)) {
                recursion(item);
            } else {
                res.push(item)
            }
        })
    }
    recursion(arr);
    return res;
}
function flatFn1(arr) {
    return arr.reduce((pre, cur) => {
        return pre.concat(Array.isArray(cur) ? flatFn1(cur) : cur);
    }, [])
}
let arr = [1, 2, [4, [5, [6]]], [7]]
console.log('flatFn1', flatFn1(arr));
