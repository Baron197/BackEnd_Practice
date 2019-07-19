var map = (arr, fn) => {
    var newArr = []
    for(var i = 0; i < arr.length; i++) {
        newArr.push(fn(arr[i]))
    }
    return newArr
}

var first = (arr) => arr[0]

var last = (arr) => arr[arr.length - 1]

module.exports = {
    map,first,last
}