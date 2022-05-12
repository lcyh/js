let arr = [
    { key: "04-28", count: 1 },
    { key: "10-12", count: 2 },
    { key: "09-04", count: 3 },
    { key: "09-04", count: 4 },
    { key: "06-01", count: 5 },
    { key: "01-17", count: 6 }
];

function handleUnique(arr) {
    let newArr = [];
    let newArrKeys = new Set();
    arr.forEach((item) => {
        if (!newArrKeys.has(item.key)) {
            newArrKeys.add(item.key);
            newArr.push(item);
        }
    })
    return newArr;
}
console.log(handleUnique(arr));;

let percentVal = 0.2;
const colorRange = [0.2, 0.4, 0.6, 0.8, 1];
let index = colorRange.findIndex((item) => {
    return percentVal <= item;
});
console.log('index', index);



// 2.reduce数组去重

let arr = [1, 2, 1, 3, 4, 5, 5];
let result = arr.reduce((prev, cur) => {
    if (!prev.includes(cur)) prev.push(cur);
    return prev;
}, [])
console.log('result', result);

