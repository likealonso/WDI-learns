const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

// mongoose.connect("mongodb://localhost/wdi-learns");
//mongoose.connect(process.env.DATABASE_URL);
const uri = "mongodb+srv://alonso:haulass21@wdi-learns.geijo.azure.mongodb.net/wdi-learns?retryWrites=true&w=majority"
mongoose.connect(uri,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(() => {
    console.log('MongoDB Connected')
})
.catch(err=> console.log(err))
// mongoose.connect('mongodb://localhost/amaz');

const db = mongoose.connection;

db.once('open', () => {
    console.log(`Connected to MongoDB at ${db.host}:${db.port}`)
})

db.on('error', (err) => {
    console.error(`Database error: \n${err}`)
})