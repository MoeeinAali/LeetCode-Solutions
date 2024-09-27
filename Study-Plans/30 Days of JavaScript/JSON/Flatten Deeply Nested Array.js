/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */


var flat = function (arr, n) {
    if (n === 0) {
        return arr;
    }
    let answer = [];
    for (const i of arr) {
        if (Array.isArray(i)) {
            answer.push(...flat(i, n - 1))
        } else {
            answer.push(i)
        }
    }
    return answer;
};


// without Recursive:
// var flat = function (arr, n) {
//
//     function flat1dep(arr) {
//         const newArr = []
//         for (const item of arr) {
//             if (Array.isArray(item)) {
//                 for (const itemIn of item) {
//                     newArr.push(itemIn)
//                 }
//             } else {
//                 newArr.push(item)
//             }
//
//         }
//         return newArr
//     }
//     for (let i = 0; i < n; i++) {
//         arr = flat1dep(arr)
//     }
//     return arr
// };
