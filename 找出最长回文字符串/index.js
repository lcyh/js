/*
 * @Author: changluo
 * @Description:
 */

function longestPalindrome(str) {
  let palindromeStr = ""; //记录最长回文串
  let tempPalindrome = ""; //记录当前回文串
  for (let i = 0; i < str.length; i++) {
    //i记录当前遍历字符串的开始位置，循环依次向后遍历
    tempPalindrome = ""; //每次新的一轮开始时，将临时记录回文串的变量清空
    for (let j = i; j < str.length; j++) {
      //每次开始循环是以当前i所在的下标位置为开始遍历字符串的起始位置，直到遍历到结束位置
      tempPalindrome += str.charAt(j); //逐个增加字符串的长度
      if (
        isPalindrome(tempPalindrome) &&
        tempPalindrome.length > palindromeStr.length
      ) {
        //将当前的字符串传入isPalindrome进行回文判断，如果是回文串，则判断当前回文串长度是否大于之前记录的最长回文串的长度，
        // 如果大于之前的回文串，则更新之前的记录即可
        palindromeStr = tempPalindrome; //更新回文串
      }
    }
  }
  return palindromeStr; //返回最终的最长的回文串
}

function isPalindrome(s) {
  //判断是否为回文串
  let rev = s.split("").reverse().join(""); //字符串逆转操作
  return rev === s;
}
function isPalindrome2(str) {
  //判断是否为回文串
  let i = 0,
    j = str.length - 1;
  while (i <= j) {
    if (str[i] !== str[j]) {
      return false;
    }
    i++;
    j--;
  }
  return true;
}
//测试
console.log(longestPalindrome("ddabbade")); //输出dabbad

let str = "";
str += "abcd".charAt(1);
console.log("str", str);

// let str = 'abcd1234';
// str = str.slice(2);
// str = str.substring(2);
// console.log('srt',str);
let str1 = "efg123";
let text = "";
for (let i = 0; i < str1.length; i++) {
  text += str1.charAt(i);
  console.log("text---", text);
}
console.log("text+++", text);

let str2 = "efg123";
console.log("str2[]", str2[1]);
console.log("str2.charAt", str2.charAt(1));
