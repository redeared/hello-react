
const greetingFunction = (prop) => {
    const P_S_ = 'From fourth - functional components';
    if (prop && prop.visitor) {
        return <h1> Hello {prop.visitor}. {P_S_}</h1>;
    }
    return <h1> Hello. {P_S_} </h1>;
}

const FourthGreeting = greetingFunction;

ReactDOM.render(<FourthGreeting visitor="World"/>, document.getElementById('fourth'));