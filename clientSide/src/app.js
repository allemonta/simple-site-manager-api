console.log('App.js is running!');

// JSX - JavaScript XML

var app = {
    title: 'Site manager',
    subtitle: 'This is my subtitle'
}

var template = (
    <div>
        <h1> {app.title} </h1>
        <p> {app.subtitle} </p>
    </div>
);

var user = {
    name: 'Alessandro Montanari',
    age: 20,
    location: 'Reggio Emilia'
}

var templateTwo = (
    <div>
        <h1> {app.title} </h1>
        <h1> {user.name} </h1>
        <p> Age: {user.age} </p>
        <p> Location: {user.location} </p>
    </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);