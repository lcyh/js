/*
 * /*
 实现一个批量请求函数 multiRequest(urls, maxNum)，要求如下：
• 要求最大并发数 maxNum
• 每当有一个请求返回，就留下一个空位，可以增加新的请求
• 所有请求完成后，结果按照 urls 里面的顺序依次打出

场景:假设现在有这么一种场景：
    现有 30 个异步请求需要发送，但由于某些原因，我们必须将同一时刻并发请求数量控制在 5 个以内，
    同时还要尽可能快速的拿到响应结果。
 */

const request = (url) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(url)
        }, Number(url) * 1000)
    })
}
function multipleRequest(urls, maxNum) {
    let len = urls.length;
    const result = new Array(len).fill(false);
    let count = 0;
    return new Promise((resolve, reject) => {
        while (count < maxNum) {
            next()
        }
        function next() {
            let current = count
            console.log('current', current);
            count++
            if (current >= len) {
                console.log('result', result);
                !result.includes(false) && resolve(result)
                return
            }
            const url = urls[current]
            request(url).then((res) => {
                result[current] = res
                if (current < len) {
                    next()
                }
            }).catch((err) => {
                result[current] = err
                if (current < len) {
                    next()
                }
            })
        }
    })
}
const urls = ['1', '2', '4', '6', '7', '8']
console.log('multipleRequest', multipleRequest(urls, 5).then((res) => {
    console.log('res', res);
}))

