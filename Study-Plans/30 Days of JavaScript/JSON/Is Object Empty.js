/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function (obj) {
    let cnt = 0;
    for (let key in obj) {
        cnt += 1;
    }
    return cnt === 0
};
