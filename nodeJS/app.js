// console.log("Hello World!")
// let x =10

// function fizzBuzz(){
    
//    for(let i=0; i<20;i++){ 
//     let str = ""

//     if(i%3 == 0)
//         str += 'Fizz'
//     if(i%5 == 0)
//         str += 'Buzz'
//     console.log(str) 
//    }
// }
// fizzBuzz()

// requie is used for import functionality of module 

// const file = require('./add.js')
// let x = file.add(20,20)
// console.log(x)

// for input from terminal 
//    console.log(process.argv)

//   DESTRUCTURING
//   const {add} = require('./add.js')
//   console.log(add(20,30)) 


// FILE SYSTEM

// const fs = require('fs')
// const path = require('path')
// let data = 'Hello There'

// console.log(__dirname)
// fs.writeFile(path.join(__dirname,'/abc.txt'),
//             data,
//             {
//                 encoding:'utf-8',
//                 flag:'w'
//             },
//             (err)=>{
//                 if (err) throw err;
//                 console.log('The file has been saved!');
//               }
// );

// fs.readFile(
//            path.join(__dirname,'abc.txt'),
//            {
//                encoding:'utf-8'
//            },
//            (err,data)=>{
//                if(err) throw err
//                console.log(data)
//            }
// );      

// FILE SYSTEM ADVANCE

// const fs = require('fs')
// const path = require('path')
// let ans = []
// F1 = path.join(__dirname,'abc.txt')
// F2 = path.join(__dirname,'abc2.txt')
// F3 = path.join(__dirname,'output.txt') 

// fs.readFile(
//     F1,
//     (err,data)=>{
//         if(err) throw err
//         ans = data.toString().split('\n')
//         fs.readFile(
//             F2,
//             (err,data)=>{
//                 if(err) throw err

//                 ans = ans.concat(data.toString().split('\n'))
//                 ans.sort((a,b)=>a-b)
                
//                 let finalans = ans.join('\n')
                
//                 fs.writeFile(F3,finalans,(err)=>{
//                     if(err) throw err
//                     console.log('Everything Done')
//                 })
//             })  
//     }
// )


// USING PROMISES

const fs = require('fs')
const path = require('path')
const { resolve } = require('path')
const { networkInterfaces } = require('os')
let ans = []
F1 = path.join(__dirname,'abc.txt')
F2 = path.join(__dirname,'abc2.txt')
F3 = path.join(__dirname,'output.txt') 

function readF1(){
    return new Promise((resolve,reject)=>{
        fs.readFile(F1,
            (err,data)=>{
                if(err) throw err
                data = data.toString().split('\n')
                resolve(data)
            })
    })
}

function readF2(){
    return new Promise((resolve,reject)=>{
        fs.readFile(F2,
            (err,data)=>{
                if(err) throw err
                data = data.toString().split('\n')
                resolve(data)
            })
    })
}
function writeF3(){
    return new Promise((resolve,reject)=>{
        fs.writeFile(F3,
            ans,
            (err)=>{
                if(err) throw err
                resolve()
            })
    })    
}

readF1()
    .then((data)=>{ //data from F1 is taken resolve
        ans = data
        console.log('File 1 read Succesful')
        console.log(ans)
        return readF2()
    })
    .then((data)=>{
            //data from F2 resolve 
            ans = ans.concat(data)
            console.log('File 2 read Succesful')
            ans.sort((a,b)=>a-b)
            let finalans = ans.join('\n')
            return writeF3(finalans)
    })
    .then(()=>{
        console.log('All Done')
    })