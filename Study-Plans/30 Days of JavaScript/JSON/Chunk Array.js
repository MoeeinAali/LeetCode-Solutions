/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */

// This Answer is Forbidden!!!

// var chunk = function (arr, size) {
//     const _ = require("lodash");
//     return _.chunk(arr, size)
// };

var chunk = function (arr, size) {
    const result = []
    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size))
    }
    return result
};