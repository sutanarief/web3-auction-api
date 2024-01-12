const mongoose = require('mongoose')
const uri = process.env.MONGODB_URI

// Create a MongoClient with a MongoClientOptions object to set the Stable API version

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("web3-auction").command({ ping: 1 });
//     const db = client.db('web3-auction')
//     console.log("Pinged your deployment. You successfully connected to MongoDB! dbName:", db.databaseName);
//     return db.databaseName
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }

const connect = () => {
    return mongoose.connect(uri)
}

module.exports = {
    connect
}
