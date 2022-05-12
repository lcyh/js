/*
 * @Author: changluo
 * @Description: 
 */
// 计算n以内的质数
// n = 7  2,3,5,7
function countPrimes(n) {
    let arr = [];
    for (let i = 2; i <= n; i++) {
        if (isPrimes(i)) {
            arr.push(i);
        }
    }
    return arr;
}
// 判断是否是质数,被1和本身整除的数才是质数
function isPrimes(num) {
    let isPrimes = true;
    // 这里排除了 1和本身
    for (let i = 2; i < num; i++) {
        // 如果 [2,n-1] 之间,有一个数能整除,说明就不是质数
        if (num % i === 0) {
            isPrimes = false;
            break;
        }
    }
    return isPrimes;
}
console.log('countPrimes(20)', countPrimes(20));