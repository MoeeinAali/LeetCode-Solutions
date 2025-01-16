/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    if (needle.length > haystack.length) return -1;

    for (let i = 0; i < haystack.length; i++) {
        let found = true;
        for (let j = 0; j < needle.length; j++) {
            if (haystack[i + j] !== needle[j]) {
                found = false;
                break;
            }
        }
        if (found) {
            return i
        }
    }
    return -1
};

console.log(strStr("leetcode","leeto"))