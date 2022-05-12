/*
 * @Author: changluo
 * @Description: 
 */
// 1.break  break会终结当前for循环体
for (let i = 0; i < 5; i++) {
    if (i == 3) {
        break;
    }
    console.log(i);
}
// 0 1 2

// 2.continue continue仅仅停止该次循环
for (let i = 0; i < 5; i++) {
    if (i == 3) {
        continue;
    }
    console.log(i);
}

// 0 1 2 4


// 3.return
function counter() {
    for (var count = 1; ; count++) {  // 无限循环
        console.log(count + "A"); // 执行5次
        if (count === 5) {
            return;
        }
        console.log(count + "B");  // 执行4次
    }
    console.log(count + "C");  // 永远不会执行，count为5时，return会直接终止整个函数
}
counter();
// return 语句仅可用在函数内(非函数内使用会直接报语法错)，是用来终止函数的执行，并返回一个指定的值给函数调用者。

function fn() {
    var i;
    var timer;
    for (i = 0; i < 7; i++) {
        if(!timer){
            timer = setTimeout(() => {
                console.log('setTimeout-i', i);
            }, 0)
        }
        console.log('---i', i);
    }
}
fn()

// setTimeout宏任务,for循环结束后,i=7,此时setTimeout里拿到的变量是7
function fn1(){
    for(var i=0;i<7;i++){
        setTimeout(()=>{
            console.log('i',i);
        },0)
    }
}
fn1(); // 打印7个7