/*
 * @Author: changluo
 * @Description: 请求重试
 */
// 重试
const retry = (fn, interval = 1000, times = 3) => {
    return new Promise((resolve, reject) => {
        const attempt = () => {
            fn.then(res => {
                resolve(res);
            }).catch(err => {
                if (times != 0) {
                    console.log('调用了');
                    times--;
                    setTimeout(attempt, interval);
                } else {
                    reject(err);
                }
            })
        };
        attempt();
    });
}
const promiseFn = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve(1)
            reject('失败了')
        })
    })
}
// console.log('retry', retry(promiseFn()).then((res) => {
//     console.log('res', res);
// }).catch(e => {
//     console.log('err', e);
// }));

function retry1(request, intervals = 1000, times = 3) {
    return new Promise((resolve, reject) => {
        const recursion = () => {
            request().then((res) => {
                resolve(res)
            }).catch((e) => {
                if (times > 0) {
                    times--;
                    setTimeout(() => {
                        recursion()
                        console.log('调用了');
                    }, intervals)
                } else {
                    reject(e)
                }
            })
        }
        recursion()
    })
}
console.log('retry1', retry1(promiseFn).then((res) => {
    console.log('res', res);
}).catch(e => {
    console.log('err', e);
}));
