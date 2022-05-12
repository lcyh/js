/*
 * @Author: changluo
 * @Description: 首字母大写
 */
export {}
type CapitalizeString<T> = T extends `${infer L}${infer R}` ? `${Uppercase<L>}${R}` : T
type a1 = CapitalizeString<'handler'>       // Handler
type a2 = CapitalizeString<'parent'>        // Parent
type a3 = CapitalizeString<233>             // 233

// let str = 'hello'
// let a:string = `${str}`
// console.log(a);
