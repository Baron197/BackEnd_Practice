// // var jam = require('./jamKece')

// // jam.setTimeout(() => {
// //     console.log('Hello')
// // }, 1000)

// // jam.setInterval(() => {
// //     console.log('Hi')
// // }, 2000)


// const assert = require ('assert')
// var minum = {kopi:['luwak','hitam','susu'] }
// assert.equal(minum.kopi.length , 3)
// // ==
// console.log('test')
// assert.strictEqual(minum.kopi.length , 3);
// // // ===
// console.log('test1')
// assert.notEqual(minum.kopi.length , 4)
// // // !=
// console.log('test2')
// // assert.notStrictEqual(minum.kopi.length , 3)
// // !==

// const events = require('events')
// var eventKu = new events.EventEmitter();

// eventKu.on('klik', () => {
//     console.log('Event klik ke trigger')
// })

// eventKu.on('drag', () => {
//     console.log('Event drag ke trigger')
// })

// console.log(eventKu.eventNames().length)
// console.log(eventKu.eventNames())



// fs.writeFile('halo.txt', ' Halo!', (err) => {
//     if (err) {
//         console.log(err)
//     }
//     fs.appendFile('halo.txt', ' \n Kuy', (err) => {
//         if (err) {
//             console.log(err)
//         }
//     })
// })

// var x = fs.readFileSync('halo.txt')
// console.log(x.toString())

// var y = fs.readFile('halo.txt', (err,data) => {
//     console.log(data.toString())
// })
// const fs = require('fs')

// var bacaStream = fs.createReadStream('halo.txt')

// bacaStream.on('data', (potData) => {
//     console.log('*** Potongan Data Masuk ***')
//     console.log(potData.toString())
// })

var chalk = require('chalk')

// console.log(chalk.red('Merah Bro'))
// console.log(chalk.bgRed(chalk.yellow('Kuning Bro')))

var saat = require('moment')

// var saatIni = saat()
// console.log(chalk.yellow(saatIni))
// console.log(chalk.yellow(saatIni.format()))
// console.log(chalk.yellow(saatIni.format("ddd, hA")))
// var saatIni = saat()
// var contoh = saatIni.format()
// var contoh1 = require('moment')().format()
// console.log(typeof(typeof(typeof(contoh1))))

// var _ = require('lodash')
// console.log(_.upperFirst('gOOgLE'))

var _ = require('./lowDash')
var x = [1,2,3]
var y = [4,5,6]
var z = [7,8,9]
var arr = [x,y,z]
console.log(arr)
var hasil = _.map(arr, _.first)
// var hasil = _.map(arr, (item) => item[0])
// var first = () => {
//     return (item) => item[0]
// }
// var hasil = _.map(arr, first())
console.log(hasil)

// var ck = require('chalk')
// ck.cobs = (test) => {
//     console.log(test)
// }
// ck.cobs('Hello')