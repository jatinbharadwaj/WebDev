const express = require('express')

const server = express()
 
server.get('/',  (req, res)=> {
  res.send('Hello World')
})


server.get('/hello',(req,res)=>{
  res.send(`Hi! ${req.query.q} welcome to our server`)
})
 
server.listen(4444,()=>{
  console.log('here')
})