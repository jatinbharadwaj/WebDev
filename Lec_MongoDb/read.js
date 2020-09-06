const {MongoClient} = require('mongodb')
const DB_PATH = 'mongodb://localhost:27017'

MongoClient.connect(DB_PATH,(err,client)=>{
    if(err) throw err
    // console.log('Connected')
    const testdb = client.db('testdb')
    const people = testdb.collection('people')

    people.find({
        $and:[
            {age: { $lt:25 } },
            {age: { $gt:20 } }
        ]
    }).toArray((err,results)=>{
        if(err) throw err
        console.log(results)
    })

    client.close()
})