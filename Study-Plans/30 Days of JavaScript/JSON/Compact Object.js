/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function (input) {
    if (input === null) {
        return null;
    }
    if (Array.isArray(input)) {
        return input.filter(Boolean).map(compactObject);
    }
    if (typeof input !== "object") {
        return input;
    }
    const compacted = {};
    for (const key in input) {
        if (compactObject(input[key])) {
            compacted[key] = compactObject(input[key]);
        }
    }

    return compacted;
};

console.log(compactObject({"a": null, "b": [false, 1]}))