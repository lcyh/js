/*
 * @Author: changluo
 * @Description: 
 */
let a1 = ['a', 'b', 'c'];
let a2 = ['t', 'b', 'a'];

// 打印:
/**
 * a move index 2
 * t append index 0
 * c remove
 */
function diff(a1, a2) {
    const map = new Map();
    for (let i in a1) {
        map.set(a1[i], i)
    }
    for (let j in a2) {
        if (map.has(a2[j])) {
            if (j !== map.get(a2[j])) {
                console.log(`${a2[j]} move index ${j}`);
            }
            map.delete(a2[j])
        } else {
            console.log(`${a2[j]} append index ${j}`);
        }
    }
    [...map.keys()].forEach(element => {
        console.log(`${element} remove`);
    });
}

// diff(a1, a2)




// let a1 = ['a', 'b', 'c'];
// let a2 = ['t', 'b', 'a'];

/**
 * a move index 2
 * t append index 0
 * c remove
 */

function diff2(a1, a2) {
    for (let i = 0; i < a2.length; i++) {
        if (!a1.includes(a2[i])) {
            console.log(`${a2[i]} append index ${i}`);
        } else {
            const index = a1.findIndex((item) => item === a2[i])
            if (index !== -1 && index !== i) {
                console.log(`${a2[i]} move index ${i}`);
            }
            a1.splice(index, 1)
        }
    }
    for (let i = 0; i < a1.length; i++) {
        console.log(`${a1[i]} remove`);
    }
}
// let a1 = ['a', 'b', 'c'];
// let a2 = ['t', 'b', 'a'];
// diff2(a1, a2)


function diff3() {
    let map = new Map();
    for (let i = 0; i < a1.length; i++) {
        map.set(a1[i], i)
    }
    for (let i = 0; i < a2.length; i++) {
        if (!map.has(a2[i])) {
            console.log(`${a2[i]} append index ${i}`);
        } else {
            if (map.get(a2[i]) !== i) {
                console.log(`${a2[i]} move index ${i}`);
            }
            map.delete(a2[i])
        }
    }
    for (let item of map) {
        const [val] = item;
        // console.log('item', item); // ['c',2]
        console.log(`${val} remove`);
    }
}
// diff3(a1, a2)


function diff4(a1, a2) {
    for (let i = 0; i < a2.length; i++) {
        if (!a1.includes(a2[i])) {
            console.log(`${a2[i]} append index ${i}`);
        } else {
            const index = a1.findIndex((item) => item === a2[i])
            if (index === i) {
                a1.splice(index, 1)
            } else if (index !== -1 && index !== i) {
                console.log(`${a2[i]} move index ${i}`);
                a1.splice(index, 1)
            }
        }
    }
    for (let i = 0; i < a1.length; i++) {
        console.log(`${a1[i]} remove`);
    }
}
console.log('diff4',diff4(a1, a2));



