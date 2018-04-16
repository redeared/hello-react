const firstGreeting = React.createElement(
    "h1", null,
    "Hello World!",
    <div> From first - React.createElement</div >,
);

ReactDOM.render(firstGreeting, document.getElementById("first"));