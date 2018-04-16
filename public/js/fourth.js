
const FourthGreeting = ({ visitor = 'World!' }) => {
    return <h1> Hello{visitor && ' '}{visitor}. From fourth - functional component </h1>;
}

ReactDOM.render(<FourthGreeting visitor="World" />, document.getElementById('fourth'));