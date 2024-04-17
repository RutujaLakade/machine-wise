// server/config.js
const mongoose = require('mongoose');

// MongoDB connection URI
const mongoURI = 'mongodb://localhost:27017/Wathare';

// Connect to MongoDB
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

module.exports = mongoose;


// const { MongoClient} = require('mongodb');
// const uri = 'mongodb: //127.0.0.1:27017';
// const dbName = 'Wathare';
// const collectionName = 'wathare';

// async function readFromMongo()
// {
//     const client = new MongoClient(uri, { UseUnifiedTopology: true});
//     try
//     {
//         await client.connect();
//         const database = client.db(dbName);
//         const collection = database.collection(collectionName);

//         const query = { 
//             machine_status:{ $in: [1,0, null]}
//             };
//         const res = await collection.find(query).toArray();
//         console.log('Retrieved data:', res);
//     }
//     catch(error)
//     {
//         console.log('Error occured while reading data from Mongo', error);
//     }
//     finally
//     {
//         await client.close();
//     }
// }

// readFromMongo();