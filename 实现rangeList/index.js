/*
 * @Author: changluo
 * @Description: 
 */

/** 
In this part of the interview process, we'd like you to come up with an algorithm to
solve the problem as described below. The problem itself is quite simple to solve. We
encourage you to use JavaScript for this coding test, but you can also use any other
language you prefer. What we are mainly looking for in this test (other than that the
solution should work) is, how well you actually write the code.
We want to see how you write production-quality code in a team setting where
multiple developers will be collaborating on the codebase.
Specifically, we are looking for: simple, clean, readable and maintainable code, for
example:
- Code organization and submission format. Things like code organization,
readability, documentation, testing and deliverability are most important here.
- Your mastery of idiomatic JavaScript (JS) programming. We understand that you
may not have much experience with JS. We encourage you to take some time to research modern JS and best practices, and try your best to apply them when
writing your test solution.
--
Problem Set below:
// Task: Implement a class named 'RangeList'
// A pair of integers define a range, for example: [1, 5). This range
includes integers: 1, 2, 3, and 4.
// A range list is an aggregate of these ranges: [1, 5), [10, 11), [100,
201)
/**
*
* NOTE: Feel free to add any extra member variables/functions you like.
*/
class RangeList {
    constructor() {
        this.list = [];
        this.memo = [];
    }
    /**
    * Adds a range to the list
    * @param {Array<number>} range - Array of two integers that specify
    beginning and end of range.
    */
    add(range) {
        // TODO: implement this
        const [s, e] = range;
        if (s === e) return
        if (this.list.length === 0) {
            this.list.push(range)
        } else {
            for (let i = 0; i < this.list.length; i++) {
                let cur = this.list[i];
                if (cur[1] >= s) {
                    cur[1] = Math.max(cur[1], e)
                    break
                }
            }
            let last = this.list[this.list.length - 1]
            if (last[1] < s) {
                this.list.push(range)
            }
        }
    }
    /**
    * Removes a range from the list
    * @param {Array<number>} range - Array of two integers that specify
    beginning and end of range.
    */
    remove(range) {
        // TODO: implement this
        const [s, e] = range;
        if (s === e) return
        for (let i = 0; i < this.list.length; i++) {
            let cur = this.list[i];
            if (s >= cur[0]) {
                this.memo[i] = cur
                if (e <= cur[1]) {
                    if (e - s <= 1) {
                        this.memo[i][0] = e
                        break
                    } else {
                        this.memo.splice(i, 1) // 先删除当前项
                        const start = [cur[0], s]
                        const end = [e, cur[1]]
                        this.memo.push(start, end)
                        break
                    }
                }
            }
        }
        this.list = this.memo
    }
    /**
    * Prints out the list of ranges in the range list
    */
    print() {
        // TODO: implement this
        const result = []
        // console.log('this.list', this.list);
        for (let [s,e] of this.list) {
            result.push(`[${s},${e})`)
        }
        const str = result.join(' ');
        console.log('str', str)
    }
}
// Example run
const rl = new RangeList();
rl.add([1, 5]);
rl.print();
// Should display: [1, 5)
rl.add([10, 20]);
rl.print();
// // Should display: [1, 5) [10, 20)
rl.add([20, 20]);
rl.print();
// // // Should display: [1, 5) [10, 20)
rl.add([20, 21]);
rl.print();
// // Should display: [1, 5) [10, 21)
rl.add([2, 4]);
rl.print();
// // Should display: [1, 5) [10, 21)
rl.add([3, 8]);
rl.print();
// // Should display: [1, 8) [10, 21)
rl.remove([10, 10]);
rl.print();
// // Should display: [1, 8) [10, 21)
rl.remove([10, 11]);
rl.print();
// // Should display: [1, 8) [11, 21)
rl.remove([15, 17]);
rl.print();
// // Should display: [1, 8) [11, 15) [17, 21)
// rl.remove([3, 19]);
// rl.print();
// Should display: [1, 3) [19, 21)