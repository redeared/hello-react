class ThirdGreeting extends React.PureComponent {
    render() {
        return (
            <React.Fragment>
                <span> Hello Word! </span>
                <span> From third - React.PureComponent</span>
            </React.Fragment>
        )
    }
}

ReactDOM.render(<ThirdGreeting />, document.getElementById('third'));