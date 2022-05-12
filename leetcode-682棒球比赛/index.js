/*
 * @Author: changluo
 * @Description: 682-棒球比赛
 * 
比赛开始时，记录是空白的。你会得到一个记录操作的字符串列表 ops，其中 ops[i] 是你需要记录的第 i 项操作，ops 遵循下述规则：

整数 x - 表示本回合新获得分数 x
"+" - 表示本回合新获得的得分是前两次得分的总和。题目数据保证记录此操作时前面总是存在两个有效的分数。
"D" - 表示本回合新获得的得分是前一次得分的两倍。题目数据保证记录此操作时前面总是存在一个有效的分数。
"C" - 表示前一次得分无效，将其从记录中移除。题目数据保证记录此操作时前面总是存在一个有效的分数。
请你返回记录中所有得分的总和。

 */
var calcPoints = (ops) => {
    let res = [];
    ops.forEach(item => {
        if (isNaN(Number(item))) {
            switch (item) {
                case 'C':
                    res.pop();
                    break;
                case 'D':
                    res.push(res[res.length - 1] * 2);
                    break;
                case "+":
                    res.push(res[res.length - 1] + res[res.length - 2])
                    break;
            }
        } else {
            res.push(Number(item))
        }
    });
    console.log('res', res);
    return res.reduce((pre, cur) => pre + cur)
}
// let ops = ["5", "2", "C", "D", "+"] // ops = ["5","-2","4","C","D","9","+","+"]
let ops = ["5","-2","4","C","D","9","+","+"]
console.log(calcPoints(ops));