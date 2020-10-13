/*const mongoose = require('mongoose');
mongoose.Promise = global.Promise;*/

// mongoose.connect("mongodb://localhost/wdi-learns");
//mongoose.connect(process.env.DATABASE_URL);
// mongoose.connect('mongodb://localhost/amaz');

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://alonso:haulass21@wdi-learns.geijo.azure.mongodb.net/<dbname>?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

/*
const db = mongoose.connection;

db.once('open', () => {
    console.log(`Connected to MongoDB at ${db.host}:${db.port}`)
})

db.on('error', (err) => {
    console.error(`Database error: \n${err}`)
})*/