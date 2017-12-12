require('dotenv').config();
require('./../config/database');
const mongoose = require('mongoose');
const sample = require('./data');
const Question = require('../models/question');

const seed = Question.remove({})


//create questions
seed.then(()=> {
    return Question.create(sample)
    // Question.create({unitId:2})
    // .then(q => {
    //     q.choices.push({text:"do you like flowers?", choiceId: 'a', correct: false});
    //     q.save()
    //     return q
    // })
    // console.log('creatin qs')
})

.then((question) => {
    console.log(question);
    mongoose.connection.close();
    process.exit();
})
.catch(err => {
    console.log('\n\n\nERROR!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
    console.log('err =', err);
    process.exit();
})


.catch(error => console.log(error))