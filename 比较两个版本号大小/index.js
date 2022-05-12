/*
 * @Description: 比较两个版本号的大小
 * 题目描述:有一组版本号如下 v1 = '0.1.1' 和 v2= '2.3.3'。
 */

function compareVersion(v1, v2) {
    const len1 = v1.split('.')
    const len2 = v2.split('.')
    const maxLen = Math.max(len1.length, len2.length)
    // if (len1.length < maxLen) {
    //     len1.push('0')
    // }
    // if (len2.length < maxLen) {
    //     len2.push('0')
    // }
    for (let i = 0; i < maxLen; i++) {
        const s1 = len1[i]
        const s2 = len2[i]
        if (s1 === undefined) {
            return -1
        }
        if (s2 === undefined) {
            return 1
        }
        if (s1 > s2) {
            return 1;
        } else if (s1 < s2) {
            return -1;
        }
    }
    return 0;
}
// console.log('compareVersion', compareVersion('2.3.3.1.2', '2.3.3')); //-1


function compareVersion1(v1, v2) {
    v1 = v1.replace(/-/g, '.');
    v2 = v2.replace(/-/g, '.');
    let arr1 = v1.split('.')
    let arr2 = v2.split('.')
    let map = new Map();
    map.set('alpha', 0)
    map.set('beta', 1)
    map.set('rc', 2)
    let i = 0;
    let len = Math.max(arr1.length - 1, arr2.length - 1)
    while (i <= len) {
        let i1 = arr1[i];
        let i2 = arr2[i];
        if (i1 === undefined) return -1;
        if (i2 === undefined) return 1;
        if (!isNaN(Number(i1)) && !isNaN(Number(i2))) {
            if (i1 > i2) {
                return 1
            } else if (i1 === i2) {
                i++
            } else {
                return -1
            }
        } else {
            if (map.get(i1) > map.get(i2)) {
                return 1
            } else if (map.get(i1) === map.get(i2)) {
                i++
            } else {
                return -1
            }
        }
    }
    return 0
}
// let s1 = '1.21.3.0', s2 = '1.11.4.1'; // 1
// let s1 = '1.21.3-0', s2 = '1.21.4-1'; // -1
// let s1 = '2.3.4-alpha', s2 = '2.3.4-alpha'; // 0
// let s1 = '3.1.4-beta', s2 = '3.1.4-alpha'; // 1
let s1 = '3.1.4-beta-1', s2 = '3.1.4-alpha-2'; // 1
console.log('compareVersion1(s1, s2)', compareVersion1(s1, s2));


let version1 = 'v1.2.97a';
let version2 = 'v1.10.1b';
version1 = version1.replace(/v/, '').replace(/[a-zA-Z]/, function (match, key) {
    return `.${match.charCodeAt()}`
})
version2 = version2.replace(/v/, '').replace(/[a-zA-Z]/, function (match, key) {
    return `.${match.charCodeAt()}`
})

function compare(num1, num2) {
    console.log('num1-num2',num1,num2);
    let i = 0;
    const arr1 = num1.split('.')
    const arr2 = num2.split('.')
    let len = Math.max(arr1.length, arr2.length)
    while (i < len) {
        const a1 = arr1[i]
        const a2 = arr2[i]
        if (a1 === undefined) return -1
        if (a2 === undefined) return 1
        if (Number(a1) > Number(a2)){
            return 1
        } else if (Number(a1) < Number(a2)) {
            return -1
        }else{
            i++
        }
    }
    return 0
}

console.log('compare',compare(version1,version2));

