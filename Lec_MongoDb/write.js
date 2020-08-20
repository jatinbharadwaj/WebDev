const {MongoClient} = require('mongodb')
const DP_PATH = 'mongodb://localhost:27017'

MongoClient.connect(DP_PATH,(err,client)=>{
    if(err) throw err
    // console.log('Connected')

    const testdb = client.db('testdb') 
    const people = testdb.collection('people')

    //insert data
    people.insertOne({
        name:'Jatin',
        city:'delhi',
        age:24
    },(err,result)=>{
        if(err) throw err
        console.log(result.ops)
    })


    client.close()
})

