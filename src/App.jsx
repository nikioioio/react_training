import React from "react";


class App extends React.Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         count: 0,
    //         sameKey: false
    //     };
    // }

    state = {
        count: 0
    }
    //во время запуска
    componentDidMount() {
        console.log('componentDidMount')

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate')
    }

    componentWillUnmount() {

    }

    handlerIncrement = () => {
        this.setState({count: this.state.count+1});
    }

    handlerDicrement = () => {
        this.setState({count: this.state.count-1});
    }

    render() {
        console.log('render ', this.state.count)
        return (
            <div style={{margin: 'auto',width: '300px'}} className="App"
            >
                <button onClick={this.handlerDicrement}>Минус</button>
                <b style={countStyle}>{this.state.count}</b>
                <button onClick={this.handlerIncrement}>Плюс</button>
            </div>
        );
    }


}

export default App;


const countStyle = {margin: '0 2rem'}