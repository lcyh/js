/*
 * @Author: changluo
 * @Description: 
 */
var i = 0;
//continue
//当continue在while或do while循环中，执行之后是继续执行判断
while (i < 5) {
    i++;
    if (i == 3) {
        continue
    }
    console.log(i) // 1,2,4,5
}


function fn() {
    let i = 0;
    while (i < 10) {
        if (i > 5) {
            break
        }
        console.log('i', i);
    }
}
fn()

//当continue在for循环中，执行之后是继续执行表达式3
for (var i = 0; i < 5; i++) {
    if (i == 3) {
        continue
    }
    console.log(i) // 0,1,2,4
}

// while 循环里的return 会 终止fn函数
function fn() {
    let arr = [3, 5, 10]
    let i = -1;
    while (i < 3) {
        i++
        if (arr[i] > 5) {
            continue
        }
        console.log('i', i);
        // return arr[i]
    }
    return 'hh'
}
console.log('fn', fn());