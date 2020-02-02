'use strict';

console.log('App.js is running!');

// JSX - JavaScript XML

var app = {
    title: 'Site manager',
    subtitle: 'This is my subtitle'
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        ' ',
        app.title,
        ' '
    ),
    React.createElement(
        'p',
        null,
        ' ',
        app.subtitle,
        ' '
    )
);

var user = {
    name: 'Alessandro Montanari',
    age: 20,
    location: 'Reggio Emilia'
};

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        ' ',
        app.title,
        ' '
    ),
    React.createElement(
        'h1',
        null,
        ' ',
        user.name,
        ' '
    ),
    React.createElement(
        'p',
        null,
        ' Age: ',
        user.age,
        ' '
    ),
    React.createElement(
        'p',
        null,
        ' Location: ',
        user.location,
        ' '
    )
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
