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
                choices: ['A way to write JavaScript in HTML tags', 'Fake HTML', 'It helps express the meaning or purpose of the content in a webpage', `That doesn't exist`],
                correctIdx: 2
            },
            {
                questionId: 4,
                text: "What are attributes?",
                choices: ['They provide additional information about an element', 'We pass them to functions and they return arguments', `It's another word for HTML tag`, 'We wrap our HTML tags around them to make CSS available'],
                correctIdx: 0
            },
            {
                questionId: 5,
                text: "What does HTML stand for?",
                choices: ['No meaning, just HTML', 'Hypertext Markup Language', 'Hyper Tech Markup Language', 'High Text Media Language'],
                correctIdx: 1
            },
            {
                questionId: 6,
                text: "Which of the following are examples of block-level elements (as opposed to inline elements)?",
                choices: ['<div>, <h1>, <p>', '<span>, <td>, <img>'],
                correctIdx: 0
            },
            {
                questionId: 7,
                text: "Properly _________ elements makes the markup more readable and less prone to errors",
                choices: ['wrapping', 'highlighting', 'defining', 'indenting'],
                correctIdx: 3
            },
            {
                questionId: 8,
                text: "What's the syntax used to add comments in HTML documents?",
                choices: ['// This is a comment', '/* This is a comment */', '<!-- This is a comment -->', '<comment> This is a comment <comment>'],
                correctIdx: 2
            },
            {
                questionId: 9,
                text: "True or false, are arrays objects?",
                choices: ['True', 'False'],
                correctIdx: 0
            },
            {
                questionId: 10,
                text: "True or false, is typing 'var nums = new Array(2, 4, 18)' the equivalent of typing 'var nums = [2, 4, 18]'?",
                choices: ['True', 'False'],
                correctIdx: 0
            },
            {
                questionId: 11,
                text: "how do we access array elements?",
                choices: ['dot notation', 'functions', 'bracket notation', 'variables'],
                correctIdx: 2
            },
            {
                questionId: 12,
                text: "What does the method 'parseInt()' do",
                choices: ['converts strings to numbers', 'converts decimal numbers to whole numbers', 'extracts a section of an array and returns a new one', 'A & B'],
                correctIdx: 3
            },
            {
                questionId: 13,
                text: "In JavaScript, there are 7 main data types: strings, numbers, booleans, symbols, objects, undefined and ________",
                choices: ['arrays', 'functions', 'null', 'regular expressions'],
                correctIdx: 2
            },
            {
                questionId: 14,
                text: "Using object constructor syntax you create an object using the keyword '_______' along with the Object() constructor",
                choices: ['new - new Object()', 'create - create Object()', 'construct - construct Object()', 'make - make Object()'],
                correctIdx: 0
            },
            {
                questionId: 15,
                text: "The JavaScript operator 'typeof' lets you know _______",
                choices: ['whether something is true or false', `what type of data you're working with`, 'what type of iterator you are using', `what type of function you're using`],
                correctIdx: 1
            },
            {
                questionId: 16,
                text: "The JavaScript operator 'typeof' lets you know _______",
                choices: ['whether something is true or false', `what type of data you're working with`, 'what type of iterator you are using', `what type of function you're using`],
                correctIdx: 1
            },
            {
                questionId: 17,
                text: "What does DOM stand for",
                choices: ['Digital Object Model', 'Document Output Model', 'Document Object Model', 'Data Output Model'],
                correctIdx: 2
            },
            {
                questionId: 18,
                text: "How many DOM elements are returned by the querySelector() method?",
                choices: ['all matching elements', 'the first matching element', 'the last matching element', 'undefined'],
                correctIdx: 1
            },
            {
                questionId: 19,
                text: "What method should we use if we want to select all of our <li>s in our document?",
                choices: [`getElementsByClassName('li')`, `getAll('li')`, `getElementsByTagName('li')`, `querySelector('li')`],
                correctIdx: 2
            },
            {
                questionId: 20,
                text: "What is the one method used to select an element that is available on the document object only (not elements)?",
                choices: ['getElementsByClassName()', 'getElementById()', 'querySelector()', 'querySelectorAll()'],
                correctIdx: 1
            },        
            {
                questionId: 21,
                text: "What is the name of the method that we use to create/attach event handlers to elements?",
                choices: ['createEventHandler', 'handleEvent', 'addEventListener', 'selectEventHandler'],
                correctIdx: 2
            },            
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
            {
                questionId: 5,
                text: "What's the command to open the Ruby shell in the terminal?",
                choices: ['IRB', 'ruby', 'rbshll', 'node'],
                correctIdx: 0
            },
            {
                questionId: 6,
                text: "What's the equivalent of JavaScript's 'console.log' in Ruby?",
                choices: ['console.log', 'puts', 'rails', 'writes'],
                correctIdx: 1
            },
            {
                questionId: 7,
                text: "Everything in Ruby is truthy except for 'false' and _________?",
                choices: ['undefined', '0', 'nil', 'an empty string'],
                correctIdx: 2
            },
            {
                questionId: 8,
                text: "In Ruby, variables are scoped according to the way they are named. What character do you use to identify an instance variable?",
                choices: ['@@', '@', '$', '[a-z]'],
                correctIdx: 1
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