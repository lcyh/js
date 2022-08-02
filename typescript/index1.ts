/*
 * @Author: changluo
 * @Description: TS 实现 Partial & Required & Readonly & Pick & Exclude & Extract & Omit
 */
//1. Partial 作用：生成一个新类型，该类型与 T 拥有相同的属性，但是所有属性皆为可选项
type IPartial<T> = {
  [key in keyof T]?: T[key];
};
interface Foo {
  name: string;
}
type Bar = IPartial<Foo>;
// 相当于
// type Bar = {
//     name?:string;
// }

// 2.Required 作用：生成一个新类型，该类型与 T 拥有相同的属性，但是所有属性皆为必选项
type IRequire<T> = {
  [P in keyof T]-?: T[P];
};
interface Foo2 {
  name: string;
  age?: number;
}
type Bar1 = Required<Foo2>;
// 相当于
// type Bar2 = {
//     name: string
//     age: string
// }

//3.Readonly 作用：生成一个新类型，该类型与 T 拥有相同的属性，但是所有属性皆为必选项
type IReadonly<T> = {
  readonly [key in keyof T]-?: T[key];
};
interface Foo3 {
  name: string;
  age: number;
}
type Bar3 = IReadonly<Foo>;

// 4.Pick 作用：生成一个新类型，该类型拥有 T 中的 K 属性
type IPick<T, K extends keyof T> = {
  [P in K]: T[P];
};
interface Foo4 {
  name: string;
  age?: number;
  gender: string;
}
type Bar4 = IPick<Foo4, "age" | "gender">; // Pick<interface,key>

// 5. Exclude 作用：如果 T 是 U 的子类型则返回 never, 不是则返回 T, 求差集

type IExclude<T, U> = T extends U ? never : T;
interface Foo5 {
  name: string;
  age?: number;
  gender: string;
}
interface Test {
  name: string;
}
type Bar5 = IExclude<"a" | "b" | "c", "a">; // 'b'|'c'
type Bar51 = IExclude<keyof Foo5, "name">; // 'age'|'gender'
type t1 = keyof Foo5;
type t2 = keyof Test;
type Bar6 = IExclude<t1, t2>; // 'age'|'gender'

type Diff<T, U> = T extends U ? never : T; // 找出T的差集
type Filter<T, U> = T extends U ? T : never; // 找出交集

type T30 = Diff<"a" | "b" | "c" | "d", "a" | "c" | "f">; // => "b" | "d"
// <"a" | "b" | "c" | "d", "a" | "c" | "f">
// 相当于
// <'a', "a" | "c" | "f"> |
// <'b', "a" | "c" | "f"> |
// <'c', "a" | "c" | "f"> |
// <'d', "a" | "c" | "f">
type T31 = Filter<"a" | "b" | "c" | "d", "a" | "c" | "f">; // => "a" | "c"
// <"a" | "b" | "c" | "d", "a" | "c" | "f"> 同上

let demo1: Diff<number, string>; // => number

// 6.扩展写 Include
type IInclude<T, U> = T extends U ? T : never;
type C1 = IInclude<"a" | "b" | "c", "c">;

// 7.Extract 作用： 和 Exclude 相反, 求交集
type IExtract<T, U> = T extends U ? T : never;

type A1 = number | string | boolean;
type A2 = number | boolean;

type B1 = IExtract<A1, A2>;

// 8.Omit 作用：生成一个新类型，该类型拥有 T 中除了 K 属性以外的所有属性

type IOmit<T, K extends keyof T> = IPick<T, IExclude<keyof T, K>>;
interface Foo7 {
  name: string;
  age: number;
  gender: string;
}

type Bar7 = IOmit<Foo7, "age" | "gender">;

type IIOmit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

type Bar8 = IIOmit<Foo7, "age" | "gender">;
