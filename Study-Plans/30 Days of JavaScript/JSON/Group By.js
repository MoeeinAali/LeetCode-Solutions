/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function (fn) {
    return this.reduce((grouped, item) => {
        const key = fn(item);
        if (!grouped[key]) {
            grouped[key] = [];
        }
        grouped[key].push(item);
        return grouped;
    }, {});
};


// Without Using JS Methods:

// Array.prototype.groupBy = function (fn) {
//     const result = {}
//     for (let i of this) {
//         const key = fn(i)
//         if (!result[key]) {
//             result[key] = []
//         }
//         result[key].push(i)
//     }
//     return result
// };

// console.log([1, 2, 3].groupBy(String)) // {"1":[1],"2":[2],"3":[3]}
