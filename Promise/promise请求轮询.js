/*
 * @Author: changluo
 * @Description: 带有节流的请求轮询
 */
const polling = (request, interval = 1000, times = 3) => {
    let timer = null
    return new Promise((resolve, reject) => {
        const attempt = () => {
            request().then(res => {
                resolve(res);
            }).catch(err => {
                if (times > 0) {
                    if (timer) return;
                    console.log('调用了');
                    times--;
                    timer = setTimeout(() => {
                        attempt();
                        timer = null;
                    }, interval);
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
console.log('polling', polling(promiseFn).then((res) => {
    console.log('res', res);
}).catch(e => {
    console.log('err', e);
}));


