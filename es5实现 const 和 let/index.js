let global1 = {}
function _const(data, value) {
    // <!-- 全局window 挂在data -->
    global1[data] = value;
    Object.defineProperty(global1, data, {
        enumerable: false,
        configurable: false,
        get: function () {
            return value
        },
        set: function (data) {
            if (data !== value) {
                throw new TypeError("Assagement to constant variable")
            } else {
                return value
            }
        }
    })
}


// <!--测试用例-->
// _const("a", { age: 18 })
_const("a", 12)
console.log('a1', global1.a);
// Object.defineProperty(global, 'a', {
//     value: 1212
// })
// a = { name: 'bb' }
delete global1.a;
// console.log('a2', a);

for (let k in global1) {
    console.log('k', k);
}

