const data = [
    {
        unitId: 1,
        questions: [
            {
                questionId: 1,
                text: "What's the command to make a directory in the terminal?",
                choices: ['mkdir', 'cd', 'touch', 'rm'],
                correctIdx: 0
            },
            {
                questionId: 2,
                text: "What's the command to navigate to the parent directory of the current directory you're in?",
                choices: ['cd ~', 'cd ..', 'cd /', 'cd'],
                correctIdx: 1
            },
            {
                questionId: 3,
                text: "What is semantic HTML?",
                choices: ['Bogus answer', 'Fake HTML', 'It helps express the meaning or purpose of the content in a webpage', `That doesn't exist`],
                correctIdx: 2
            },
            {
                questionId: 4,
                text: "What are attributes?",
                choices: ['They provide additional information about an element', 'Bogus answer B', 'Bogus answer C', 'Bogus answer D'],
                correctIdx: 0
            }
        ]
    },

//unit 2 questions
    {
        unitId: 2,
        questions: [
            {
                questionId: 1,
                text: "In Ruby, everything is a/an ________",
                choices: ['object', 'string', 'number', 'array'],
                correctIdx: 0
            },
            {
                questionId: 2,
                text: "String _________ allows us to embed an expression with a string",
                choices: ['expression', 'interpolation', 'objectification', 'redirection'],
                correctIdx: 0
            },
            {
                questionId: 3,
                text: "How many levels of scope are there in Ruby and what are they?",
                choices: ['1: local', '2: local and global', '3: local, global and instance', '4: local, global, instance and class'],
                correctIdx: 0
            },
            {
                questionId: 4,
                text: "Is an empty string truthy or falsey?",
                choices: ['Jon', 'Tim', 'AJ'],
                correctIdx: 0
            },
        ]
    },

//unit 3 questions
    {
        unitId: 3,
        questions: [
            {
                questionId: 1,
                text: "When is this?",
                choices: ['Jon', 'Tim', 'AJ'],
                correctIdx: 0
            },
            {
                questionId: 2,
                text: "When is that?",
                choices: ['Jon', 'Tim', 'AJ'],
                correctIdx: 0
            },
            {
                questionId: 3,
                text: "When is then?",
                choices: ['Jon', 'Tim', 'AJ'],
                correctIdx: 0
            },
            {
                questionId: 4,
                text: "When are you?",
                choices: ['Jon', 'Tim', 'AJ'],
                correctIdx: 0
            },  
        ]
    },
//unit 4 questions

    {
        unitId: 4,
        questions: [
            {
                questionId: 1,
                text: "Where is this?",
                choices: ['Jon', 'Tim', 'AJ'],
                correctIdx: 0
            },
            {
                questionId: 2,
                text: "Where is that?",
                choices: ['Jon', 'Tim', 'AJ'],
                correctIdx: 0
            },
            {
                questionId: 3,
                text: "Where is then?",
                choices: ['Jon', 'Tim', 'AJ'],
                correctIdx: 0
            },
            {
                questionId: 4,
                text: "Where are you?",
                choices: ['Jon', 'Tim', 'AJ'],
                correctIdx: 0
            }
        ]
    }
]

module.exports = data;