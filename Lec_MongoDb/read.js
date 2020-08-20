const {MongoClient} = require('mongodb')
const DP_PATH = 'mongodb://localhost:27017'

MongoClient.connect(DP_PATH,(err,client)=>{
    if(err) throw err
    // console.log('Connected')

    const testdb = client.db('testdb') 
    const people = testdb.collection('people')

    people.find({}).toArray((err,results)=>{
        if(err) throw err
        console.log(results)
    })

        people.deleteOne({},(err,results)=>{
        if(err) throw err
        console.log("Deleted Successfully")
        console.log(results)
        console.log(results.ops)
    })
    client.close()
})