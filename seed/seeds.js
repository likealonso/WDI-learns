require('dotenv').config();
require('./../config/database');
const mongoose = require('mongoose');
const sample = require('./data');
const Unit = require('../models/unit');
const sood = Unit.remove({})

sood.then(() => {
    return Unit.create(sample)

})
.then((unit) => {
    console.log(unit);
    mongoose.connection.close();
    process.exit();
})

.catch(err => {
    process.exit();
})


.catch(error => console.log(error))
