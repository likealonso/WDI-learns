const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

// mongoose.connect("mongodb://localhost/wdi-learns");
mongoose.connect(process.env.DATABASE_URL);
// mongoose.connect('mongodb://localhost/amaz');

const db = mongoose.connection;

db.on('connected', () => {
    console.log(`Connected to MongoDB at ${db.host}:${db.port}`)
})

db.on('error', (err) => {
    console.error(`Database error: \n${err}`)
})