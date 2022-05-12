/*
 * @Author: changluo
 * @Description: 
 * 编写一个 go函数
 * 
 * 执行: 
 * go('l') // 'gol'
 * go()('l) // 'gool'
 * go()()('l) // 'goool'
 */

function go(str) {
    let s = 'go'
    if (str) {
        return s + str;
    } else {
        s = s + 'o'
    }
    function addO(str1) {
        if (!str1) {
            s = s + 'o'
            return addO
        } else {
            return s + str1
        }
    }
    return addO
}
// go('l')  'gol'
// go()('l')  'gool'
// go()()('l')  'goool'
console.log('go(l)', go('l'))
console.log('go()(l)', go()('l'))
console.log('go()()(l)', go()()('l'))
console.log('go()()()(l)', go()()()('l'))