const https = require('https')
let url = 'https://cat-fact.herokuapp.com/facts'

const request = https.get(url,(response)=>{
    console.log(response.statusCode)
    let x = ""
    response.on('data',(data)=>{
        // console.log(data)
        x+=data.toString()
    })
    response.on('end',()=>{
        console.log(x)
        let data = JSON.parse(x)
        console.log(data.all[0].text)
        console.log("everything Done")
    })
})