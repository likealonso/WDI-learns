require('./../config/database');
const sample = require('./data');
const Question = require('../models/question');

const seed = Question.remove({})

//create questions
seed.then(()=> {
    return Question.create(sample)
})

.then((question) => {
    console.log(question);
    mongoose.connection.close();
    process.exit();
});