/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function (arr1, arr2) {
    const map = new Map();

    for (const obj of arr1) {
        map.set(obj.id, obj);
    }
    for (const obj of arr2) {
        if (!map.has(obj.id)) {
            map.set(obj.id, obj);
        } else {
            const prevObj = map.get(obj.id);
            for (const key of Object.keys(obj)) {
                prevObj[key] = obj[key];
            }
        }
    }
    const res = [];
    map.forEach((value) => {
        res.push(value)
    })

    return res.sort((a, b) => a.id - b.id);
};

