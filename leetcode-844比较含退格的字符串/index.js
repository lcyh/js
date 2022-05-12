/*
 * @Author: changluo
 * @Description: 844-比较退格字符串
 * 
给定 s 和 t 两个字符串，当它们分别被输入到空白的文本编辑器后，请你判断二者是否相等。# 代表退格字符。
如果相等，返回 true ；否则，返回 false 。
注意：如果对空文本输入退格字符，文本继续为空。
示例1:
输入：s = "ab#c", t = "ad#c"
输出：true
解释：S 和 T 都会变成 “ac”。

输入：s = "ab##", t = "c#d#"
输出：true
解释：s 和 t 都会变成 “”。

输入：s = "a##c", t = "#a#c"
输出：true
解释：s 和 t 都会变成 “c”。

输入：s = "a#c", t = "b"
输出：false
解释：s 会变成 “c”，但 t 仍然是 “b”。
 */
var backspaceCompare = (s,t) => {
    if(!s.length || !t.length) return false
    let res1 = [];
    let res2 = [];
    const handleString = (str)=>{
        let res = []
        str.split('').forEach((i)=>{
            if(i === '#'){
                res.pop()
            }else{
                res.push(i)
            }
        })
        return res.join('');
    }
    res1 = handleString(s)
    res2 = handleString(t)
    console.log({res1,res2});
    return res1 === res2;
}
// let s = 'a#c',t = "b";
// console.log(backspaceCompare(s,t));


var backspaceCompare1 = function(s, t) {
    if(!s.length && t.length) return false
    if(!t.length && s.length) return false
    let res1,res2;
    const handleStr = (str) =>{
        const res = [];
        console.log(str.split(''));
        str.split('').forEach((i)=>{
            if(i !== '#'){
                res.push(i)
            }else{
                res.pop()
            }
        })
        return res.join('')
    }
    res1 = handleStr(s);
    res2 = handleStr(t);
    return res1 === res2;
};
let s = "a##c", t = "#a#c";
console.log(backspaceCompare1(s,t));