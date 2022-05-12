/*
 * @Author: changluo
 * @Description: 
 */
// 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
// 示例 1:
// 输入: "abcabcbb"
// 输出: 3 
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
// 示例 2:
// 输入: "bbbbb"
// 输出: 1
// 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
// 示例 3:
// 输入: "pwwkew"
// 输出: 3
// 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
//      请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。

const lengthOfLongestSubstring = function (s) {
    let arr = [], max = 0,currentLongest = '';
    for (let i = 0; i < s.length; i++) {
        let index = arr.indexOf(s[i])
        if (index !== -1) {
            arr.splice(0, index + 1);
        }
        arr.push(s.charAt(i)); //arr.push(s[i])
        // if(arr.length>max){
        //     currentLongest = arr.join('')
        // }
        max = Math.max(arr.length, max)
    }
    console.log('arr',arr);// ['k','e','w']
    // console.log('currentLongest',currentLongest);
    return max
};
console.log(lengthOfLongestSubstring("pwwkew"));

let arr = ['a','b','c','b']
let index = arr.indexOf('b');
console.log('index',index);
console.log(arr.splice(0,index+1)); //['a','b'] splice(startIndex,deleCount)
console.log('arr',arr); // ['c','b']


function fn() {
    let s = "abcbb";
    for (let i = 0; i < s.length; i++) {
        // console.log('s[i]',s[i]);
        // console.log('s.charAt[i]',s.charAt(i));
        // console.log('s.subString',s.substring(0,i));// substring(startIndex,endIndex)
        console.log('s.substr',s.substr(0,2));// substr(formIndex,count)
    }
}
fn()


// 找出字符串中 最长无重复的字符子串
function handleGetLongestStr(s){
    let max = 0, currentLongest='',arr=[];
    for(let i=0;i<s.length;i++){
        let index = arr.indexOf(s[i]);
        if(index !== -1){
            arr.splice(0,index+1);
        }
        arr.push(s[i]);
        if(arr.length>max){
            currentLongest = arr.join('');
        }
        max = Math.max(arr.length,max);
    }
    return currentLongest;
}
console.log(handleGetLongestStr('abccdf1'));