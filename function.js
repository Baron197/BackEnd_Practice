// var coba = () => {
//     return {
//         keren: (arr) => {
//             var a = {}
//             for(var i = 0; i < arr.length; i++) {
//                 a[arr[i]] = {
//                     keru: [1,2,3,4,5,() => {
//                         console.log('Keren cuy')
//                         console.log('tapi pusing')
//                     }]
//                 }
//             }
//             return a;
//         }
//     }
// }

// coba().keren(['hello','contoh']).hello.keru[5]()
// var hasil1 = coba()
// var hasil2 = hasil1.keren(['kuri'])
// hasil2.kuri.keru[5]()

// var props = 'Kuri'
// var test = {}
// test['props'] = 'Baron'
// console.log(test)

var connect = (fnMapState, objActionCreator) => {
    return (classComponent) => {
        console.log(`Component ${classComponent} terhubung`)
        return { testing: [classComponent,objActionCreator] }
    }
}
// connect(null,null)('Header')
// var hasil = connect(5,4)
// var hasilAkhir = hasil('Login')
// console.log(hasilAkhir)
// console.log(hasilAkhir.testing[1])
console.log(connect(8, 'Hello')('Coy').testing[0])
