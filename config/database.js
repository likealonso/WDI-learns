const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

// mongoose.connect("mongodb://localhost/wdi-learns");
//mongoose.connect(process.env.DATABASE_URL);
// mongoose.connect('mongodb://localhost/amaz');
mongoose.connect("mongodb+srv://new-user:abc123abc123@wdi-learns.geijo.azure.mongodb.net/wdi-learns?retryWrites=true&w=majority")

const db = mongoose.connection;

db.once('open', () => {
    console.log(`Connected to MongoDB at ${db.host}:${db.port}`)
})

db.on('error', (err) => {
    console.error(`Database error: \n${err}`)
})