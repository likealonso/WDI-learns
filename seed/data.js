const data = [
    {
        unitId: 1,
        questions: [
            {
                questionId: 1,
                text: "In the terminal, what's the command to make a directory?",
                choices: ['mkdir', 'cd', 'touch', 'rm'],
                correctIdx: 0
            },
            {
                questionId: 2,
                text: "In the terminal, what's the command to navigate to the parent directory of the current directory you're in?",
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
                correctIdx: 1
            },
            {
                questionId: 3,
                text: "How many levels of scope are there in Ruby and what are they?",
                choices: ['1: local', '2: local and global', '3: local, global and instance', '4: local, global, instance and class'],
                correctIdx: 3
            },
            {
                questionId: 4,
                text: "In Ruby, is an empty string truthy or falsey?",
                choices: ['truthy', 'falsey'],
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
                text: "In React, what is state?",
                choices: ['Immutable data', 'Mutable data', 'A function', 'Not a React term'],
                correctIdx: 1
            },
            {
                questionId: 2,
                text: "In React, what are props?",
                choices: ['Mutable data passed down from a parent to a child component', 'A form of JavaScript syntax', 'Immutable data passed down from a parent to a child component', 'Something a React function returns'],
                correctIdx: 2
            },
            {
                questionId: 3,
                text: "True or false: A React component can alter its own state ONLY",
                choices: ['True', 'False'],
                correctIdx: 0
            },
            {
                questionId: 4,
                text: "True or false: lifecycle methods can be used in both class and stateless functional components",
                choices: ['True', 'False'],
                correctIdx: 1
            },
            {
                questionId: 5,
                text: "What's the name of the only method used to update state in React?",
                choices: ['componentWillUpdate', 'setState', 'this.state', 'updateState'],
                correctIdx: 1
            },
            {
                questionId: 6,
                text: "Lowercase built-in React components are also called _________",
                choices: ['React elements', 'React objects', 'JSX', 'presentational components'],
                correctIdx: 0
            },
            {
                questionId: 7,
                text: "True or false: User-defined components should always be capitalized",
                choices: ['True', 'False'],
                correctIdx: 0
            },
            {
                questionId: 8,
                text: "How many component nodes(or 'things') can be returned from a component's render method?",
                choices: ['0', '1', '2', 'Any number of nodes'],
                correctIdx: 1
            },
            {
                questionId: 9,
                text: "What do we use to pass information as key/value pairs to other components?",
                choices: ['state', 'functions', 'props', 'setState'],
                correctIdx: 2
            },
            {
                questionId: 10,
                text: "To embed JS expressions within JSX, we wrap the expressions with ________?",
                choices: ['[ ]', '{ }', "''", '( )'],
                correctIdx: 1
            },
            {
                questionId: 11,
                text: "Before rendering to the actual DOM, React renders to the ________?",
                choices: ['Virtual DOM', 'componentDidMount', "state", 'Return DOM'],
                correctIdx: 0
            },
            {
                questionId: 12,
                text: "What comes into existence when a function 'remembers' its free variables?",
                choices: ['global scope', 'compilers', 'closures', 'refs'],
                correctIdx: 2
            },
            {
                questionId: 13,
                text: "What array method is best suited for transforming an array of objects into a new array of React components?",
                choices: ['filter', 'map', 'push', 'forEach'],
                correctIdx: 1
            },
            {
                questionId: 14,
                text: "What two approaches enable a client-side router to avoid full-page refreshes?",
                choices: ['History API and Hash URI', 'bundlers and package managers', 'CDN and JSX', 'components and elements' ],
                correctIdx: 0
            },
            {
                questionId: 15,
                text: "What two categories of React components are there?",
                choices: ['smart and dumb', 'container and presentational', 'A and B', 'functional and dysfunctional'],
                correctIdx: 2
            },
            {
                questionId: 16,
                text: "True or False: Container components are concerned about how things look",
                choices: ['True, they do', 'False, they worry about how things work'],
                correctIdx: 1
            },
            {
                questionId: 17,
                text: "A UI in React is a hierarchy of ____________.",
                choices: ['states', 'props', 'components', 'functions' ],
                correctIdx: 2
            },
            {
                questionId: 18,
                text: "Is 'render' a lifecycle method?",
                choices: ['True', 'False'],
                correctIdx: 0
            },
            {
                questionId: 19,
                text: "when is componentDidMount called?",
                choices: ['Before render', 'After render', 'Before componentWillMount', 'Never'],
                correctIdx: 1
            },
            {
                questionId: 20,
                text: "In a React app, where should our AJAX requests go?",
                choices: ['in state', 'inside componentDidMount', 'inside render', 'inside componentWillMount'],
                correctIdx: 1
            },
            
        ]
    }
]

module.exports = data;