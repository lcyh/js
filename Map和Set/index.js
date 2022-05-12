/*
 * @Author: changluo
 * @Description: 
 */
let map1 = new Map([['a',1],['b','lc'],['age',12]]);
console.log('map1', map1.get('a')); //1


// 利用set求交集,并集,差集
let arr1=[1,2,3];
let arr2=[2,3,4,5,6];

//交集
function intersection(arr1,arr2){
    let set1 = new Set(arr1);
    let set2 = new Set(arr2);
    let inter = [...set1].filter((item)=>set2.has(item));
    return inter; 
}
console.log('交集',intersection(arr1,arr2)); //[2,3]

//并集
function union(arr1,arr2){
    let set1 = new Set([...arr1,...arr2]);
    return [...set1]; 
}
console.log('并集',union(arr1,arr2)); // [1,2,3,4,5,6]

// 求差集
function deleteFn(arr1,arr2){
    let set1=new Set(arr1);
    let set2=new Set(arr2);
    return [...set1].filter((item)=>!set2.has(item)); 
}
console.log('差集',deleteFn(arr1,arr2));// [1]



let time = new Date()
const Con = time.constructor
const res = new Con(time.getTime())

console.log('Con',Con);
for(let key in time){
    console.log('key',key);
    res[key] = time[key]
}
console.log('res',res);
