/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    s = s.trimEnd()
    let i = s.length - 1
    for (; i >= 0; i--) {
        if (s[i] == " ") {
            return s.length - 1 - i
        }
    }
    return s.length

};


console.log(lengthOfLastWord(" a"))