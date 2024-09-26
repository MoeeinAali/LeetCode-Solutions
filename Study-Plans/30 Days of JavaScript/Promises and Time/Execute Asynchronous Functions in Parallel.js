/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function (functions) {
    let promises = []
    functions.forEach((func) => {
        promises.push(func())
    })
    return Promise.all(promises)
};

// const promise = promiseAll([() => new Promise(res => res(42))])
// promise.then(console.log); // [42]
