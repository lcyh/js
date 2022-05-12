/*
 * @Author: changluo
 * @Description: 
 */
const list = [
    { id: 1, name: '明日方舟', collected: false },
    { id: 2, name: '命运-冠位指定', collected: false },
    { id: 3, name: '阴阳师', collected: false },
    { id: 4, name: '碧蓝航线', collected: false },
    { id: 5, name: '山海镜花', collected: false },
    { id: 6, name: 'Bang Gream', collected: false },
    { id: 7, name: '凹凸世界', collected: false },
    { id: 8, name: '阴阳师-百闻牌', collected: false },
    { id: 9, name: '公主连结', collected: false },
    { id: 10, name: '明日方舟', collected: false },
    { id: 11, name: '王者荣耀', collected: false },
    { id: 12, name: '黑潮：深海觉性', collected: false },
    { id: 13, name: '原神', collected: false },
]

function handleSlice(list, num) {
    // let index = 0;
    const arr = [];
    for (let i = 0; i < list.length; i += num) {
        gameList.push(list.slice(i, i + num))
    }
    //   while (index<list.length){
    //       arr.push(list.slice(index,index+=num))
    //   }
    return arr;
}
let newList = handleSlice(list, 5);
console.log('newList', JSON.stringify(newList, null, 2));


function handleSliceList(list,num) {
    const gameList = [];
    for (let i = 0; i < list.length; i += num) {
        gameList.push(list.slice(i, i + num));
    }
    return gameList;
}