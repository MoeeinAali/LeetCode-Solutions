/**
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function () {
    const len = this.length
    if (this.length === 0) {
        return -1
    } else {
        return this[len - 1]
    }
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */