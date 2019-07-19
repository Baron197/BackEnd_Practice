var setTimeout = (fn, ms) => {
    for(var i = 0; i < ms * 1000000; i++){

    }
    fn()
}

var setInterval = (fn, ms) => {
    for(var i = 0;; i++){
        if((i % (ms * 100000) === 0) && (i !== 0)) {
            fn()
        }
    }
}

module.exports = {
    setTimeout,
    setInterval
}