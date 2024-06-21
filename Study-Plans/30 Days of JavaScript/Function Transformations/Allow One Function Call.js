/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function (fn) {

    var hasBeenCalled = false;
    var result;

    return function (...args) {
        if (!hasBeenCalled) {
            result = fn(...args);
            hasBeenCalled = true;
            return result;
        } else {
            return undefined;
        }
    }

};