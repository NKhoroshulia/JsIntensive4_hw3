Array.prototype.myFilter = function(callback) {
    
    let newArray = [];

    for(let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            newArray.push(this[i]);
        }
    }
    return newArray;
};

function createDebounceFunction(callback, ms) {
    let timer = 0;

    function delay() {
        clearTimeout(timer);
        timer = setTimeout(callback, ms);
    };

    return delay;
}