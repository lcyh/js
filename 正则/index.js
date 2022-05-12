let str = 'sdasasd121212sdfasd';
let regStr= /[a-z]+/g;
let regNum= /[\d]+/g;

console.log(str.replace(regNum,'YYYY-MM-DD'));;
console.log(str.match(regStr));;

let strResult = (str,reg)=>str.match(reg);
// console.log(strResult(str,regStr));
// console.log(strResult(str,regNum));

let num = 66234567891121.11;
// 1.判断是整数还还是带有小数，将整数位截取出来；
// 2.截取的整数位先对3取余;
// 2.截取取余的前n位整数；
// 3.截取取余的后n位整数；
// 4.对截取取余的后n位数进行循环遍历,如果索引能整除3的在该值前面加 ,逗号；如果不能整除的不做修改；
// 5.拼接 前n位+后n位+小数位
// 6.判断截取最开头多的 ，逗号；
function formatFn(val,num){
    val = val.toString();
    let parNum = val;
    let hasDot = val.split('.')[1];
    // 小数部分
    let dotNum = '';
    if(hasDot){
        // 整数部分
        parNum = val.match(/\d*\./g).join('').split('.').join('');
        dotNum = val.match(/\.\d*/g).join('');
    }
    console.log({val,parNum,dotNum});
    let len = parNum.length;
    let startStr = parNum.slice(0,len%num);
    let restStr = parNum.slice(len%num);
    console.log({startStr,restStr});
    let str = '';
    for(let i=0;i<restStr.length;i++){
        let item = restStr[i];
        str +=  i % num === 0 ? `,${item}` : item;
    }
    str = startStr + str + dotNum;
    // 如果能整除，去掉最前面的 逗号；
    if(!startStr) str = str.slice(1);
    console.log({str});
}
formatFn(num,3);


/**
 * @description 包含小数的
 * @param {value: 具体数值, num: 分割位数}
 * @return 
 */
function splitPointWithComma(value, num) {
    value = value.toString()
    // 获取小数部分
    let pointValue = value.match(/(\.\w*)/g).join('')
    // 获取整数部分
    value = value.match(/(\w*\.)/g).join().split('.').join('')
    let result = []
    let times = Math.ceil(value.length % num);
    for (let i=0; i <= times; i++) {
      let start = value.length % num === 0 ? num : value.length % num
      result.push(value.slice(0, start))
      value = value.slice(start)
    }
    result = result.join(',') + pointValue
    return result
  }
  


// https://www.cnblogs.com/beiyi888/p/10281141.html  
// “隐式位置” \b，匹配这样的位置：它的前一个“显式位置”字符和后一个“显式位置”字符不全是 \w。
// 1.(?=a) 表示我们需要匹配某样东西的前面。
// 2.(?:a) 表示我们需要匹配某样东西本身。

// https://www.cnblogs.com/vinfy2018/p/8469883.html
// ?=是正向预匹配，即不会让?=后面的内容被匹配出来，这里的作用是不让\d{3}+被替换掉
// ?:是非捕获性匹配，它使匹配不缓存起来，这点我要另起文章写，去掉了也不影响正确结果

// 正则实现 1234567.23 --> 1,234,567.23
// 正则1
let reg = /(?=(\d{3})+\b)/g;
let num1=231234561.12;
let res=num1.toString().replace(reg,'$&,');
console.log('res',res);

//正则2
let str = '121234567891'.replace(/(?=(\d{3})+\b)/g, ','); 
console.log('str',str);


let rgx = /(\d+)(\d{3})/;
console.log('rgx.test',rgx.test(1321.1));

// 每3位分割数字字符串
const formatMoney=(nStr)=> {
  nStr += '';
  let x = nStr.split('.');
  console.log('x',x);
  let x1 = x[0];
  // x.length>1,说明有小数位
  let x2 = x.length > 1 ? '.' + x[1] : '';
  let rgx = /(\d+)(\d{3})/; // 整数位最少4(1+3)位数
  while (rgx.test(x1)) {
    console.log('x1-1',x1);
      x1 = x1.replace(rgx, '$1' + ',' + '$2');
    console.log('x1-2',x1);
  }
  return x1 + x2;
}
let val = formatMoney('1122123456.12');
console.log('val',val);

let num = 123345.1;
console.log('num.split()',num.toString().split('.'));

let rgx = /(\d+)(\d{3})/; // 整数位最少4(1+3)位数
console.log(rgx.test('1122123,456'));