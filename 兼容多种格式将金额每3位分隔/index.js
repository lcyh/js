/**
 * 2.实现一个金额展示格式化的函数formatAmount ,金额展示规则为整数部分每三位用逗号分隔，小数部分展示00
 * 示例1：formatAmount(2688);=>"2,688.00"
 * 示例2：formatAmount('2e6');=>"2,000,000.00"
 * 示例3：formatAmount(-2.3333333);=>"-2.33"
 * 示例2：formatAmount('Alibaba');=>"-"   
 */
function formatAmount(num) {
    if (isNaN(Number(num))) {
      return '-'
    }
    if (typeof num === 'string') {
      num = Number(num);
    }
    num = num.toString();
    const arr = num.split(".");
    let n1 = arr[0];
    let n2 = arr[1];
    console.log(n1, n2);
    const reg = /(\d+)(\d{3})/;
    let str = "";
    console.log("reg.test(n1)", reg.test(n1));
    while (reg.test(n1)) {
      n1 = n1.replace(reg, "$1" + "," + "$2");
    }
    console.log("n1-n2", n1, n2);
    if (n2) {
      str = n1 + "." + n2.slice(0, 2);// 有小数点时保留两位小数
    } else {
      str = n1 + '.00';
    }
    return str;
  }
  // console.log(formatAmount(2688.12));// 2,688.12
  // console.log(formatAmount(2688));// 2,688.00
  // console.log(formatAmount('2e6'));// 2,000,000.00
  // console.log(formatAmount(-2.3333333));// -2.33
  // console.log(formatAmount('Alibaba'))// -
  // console.log(Number('Alibaba'));// NaN
  // console.log(typeof NaN);// number
  
  console.log('2e6-1', parseInt('2e6'));
  console.log('2e6-2', parseInt(Number('2e6')));
  
  const reg = /(\d+)(\d{3})/g; // 正则带 /g
  // str.replace(/(\d+)(\d{3})/g,"$1" + "," + "$2")
  // replace加了 /g,如果用了 $1和$2，则只会分隔成两部分
  let str = "2688123.12".replace(reg, "$1" + "," + "$2");
  console.log("str", str);
  
  const reg = /(\d+)(\d{3})/;
  let str = "2688123.12".replace(reg, "$1" + "," + "$2");
  console.log("str", str);



  function formatNum (val) {
    const str = val.toString()
    const x = str.split('.')
    let x1 = x[0]
    const x2 = x.length > 1 ? '.' + x[1] : ''
    const rgx = /(\d+)(\d{3})/g
    while (rgx.test(x1)) {
      console.log('x1-1',x1);
      x1 = x1.replace(rgx, '$1' + ',' + '$2')
      console.log('x1-2',x1);
    }
    return x1 + x2
  }
  console.log(formatNum(268812345.12));// 
