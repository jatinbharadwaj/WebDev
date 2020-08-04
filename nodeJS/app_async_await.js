const fs = require('fs')
const path = require('path')
const util = require('util')
let ans = []
F1 = path.join(__dirname,'abc.txt')
F2 = path.join(__dirname,'abc2.txt')
F3 = path.join(__dirname,'output.txt') 

let read = util.promisify(fs.readFile)
let write = util.promisify(fs.writeFile)

async function sort(){
    let f1 = await read(F1)
    let f2 = await read(F2)

    let data = f1.toString().split('\n')
    data = data.concat(f2.toString().split('\n'))
    data.sort((a,b)=>a-b)

    await write(F3,data.join('\n'))
    console.log('All Done')
}
sort()