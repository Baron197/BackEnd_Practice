var coba = () => {
    try {
        console.log(kari)
    } catch(err) {
        throw err
    }
}

try {
    console.log('hello')
    coba()
    console.log('hello2')
} catch(err) {
    // console.log(err)
    console.log('test')
}
