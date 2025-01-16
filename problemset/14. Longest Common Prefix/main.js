/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    strs.sort()
    const first = strs[0]
    const last = strs[strs.length - 1]
    let ans = ""
    for (let i = 0; i < Math.min(first.length, last.length); i++) {
        if (first[i] === last[i]) {
            ans += first[i]
        } else {
            break
        }
    }
    return ans
};

console.log(longestCommonPrefix(["dog", "racecar", "car"]))
