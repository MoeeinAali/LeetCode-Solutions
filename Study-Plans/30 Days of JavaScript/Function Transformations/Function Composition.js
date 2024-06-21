/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function (functions) {

    return function (x) {
        var result = x;
        for (var i = functions.length - 1; i > -1; i--) {
            result = functions[i](result)
        }
        return result;
    }
};