var TimeLimitedCache = function () {
    this.cache = new Map();
};

/**
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function (key, value, duration) {
    const found = this.cache.has(key);

    if (found) {
        clearTimeout(this.cache.get(key).timeout);
    }

    const timeout = setTimeout(() => {
        this.cache.delete(key);
    }, duration);

    this.cache.set(key, {value, timeout});
    return found;
};

/**
 * @param {number} key
 * @return {number} value associated with key, or -1 if expired or not found
 */
TimeLimitedCache.prototype.get = function (key) {
    if (this.cache.has(key)) {
        return this.cache.get(key).value;
    }
    return -1;
};

/**
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function () {
    return this.cache.size;
};


// const timeLimitedCache = new TimeLimitedCache()
// timeLimitedCache.set(1, 42, 1000); // false
// console.log(timeLimitedCache.get(1)) // 42
// console.log(timeLimitedCache.count()) // 1
