class EventEmitter {
    constructor() {
        this.events = {};
    }

    /**
     * @param {string} eventName
     * @param {Function} callback
     * @return {Object}
     */
    subscribe(eventName, callback) {
        if (!this.events[eventName]) {
            this.events[eventName] = [];
        }
        this.events[eventName].push(callback);
        return {
            unsubscribe: () => {
                this.events[eventName] = this.events[eventName].filter(cb => cb !== callback);
                if (this.events[eventName].length === 0) {
                    delete this.events[eventName];
                }
                return undefined;
            }
        };
    }

    /**
     * @param {string} eventName
     * @param {Array} args
     * @return {Array}
     */
    emit(eventName, args = []) {
        if (!this.events[eventName]) {
            return [];
        }
        return this.events[eventName].map(callback => callback(...args));
    }
}

// const emitter = new EventEmitter();
// function onClickCallback() {
//     return 99
// }
// const sub = emitter.subscribe('onClick', onClickCallback);
// console.log(emitter.emit('onClick')); // [99]
// sub.unsubscribe(); // undefined
// console.log(emitter.emit('onClick')); // []
