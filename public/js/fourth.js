
const FourthGreeting = ({ visitor: visitor = 'World!', ...props }) => {
    return <h1> Hello{visitor ? " " + visitor: ''}. From fourth - functional component </h1>;
}

ReactDOM.render(<FourthGreeting visitor="World" />, document.getElementById('fourth'));