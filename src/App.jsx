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
        count: 0,
        isPause: true,
        nameButtonStart: 'Start'
    }


    // во время запуска
    componentDidMount() {
        if (localStorage.getItem('count')){
            this.setState({count: parseInt(localStorage.getItem('count')),
                                isPause: localStorage.getItem('isPause'),
                                nameButtonStart: localStorage.getItem('nameButtonStart')})
        }
        console.log('componentDidMount');
        this.initInterval();
    }

    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     console.log(prevState);
    //
    // }
    //
    // componentWillUnmount() {
    //     console.log('componentWillUnmount')
    // }

    initInterval = () => {
        this.timerId = setInterval(async () => {

            if (!this.state.isPause) {
                this.setState({count: this.state.count + 1});
                localStorage.setItem('count', this.state.count);
                localStorage.setItem('isPause', this.state.isPause);
                localStorage.setItem('nameButtonStart', this.state.nameButtonStart);
            }
        }, 1000);
    }

    resumeInterval = () => {
        this.state.isPause ?
            this.setState({isPause: false, nameButtonStart: 'Stop'}):
            this.setState({isPause: true, nameButtonStart: 'Start'})
    }

    clearInterval = () => {
        localStorage.clear()
        this.setState({count: 0, isPause: true, nameButtonStart: 'Start'})
    }


    render() {
        return (
            <div style={{margin: 'auto', width: '500px'}} className="App">
                <h1>React Timer</h1>
                <span style={mainStyle}>{this.state.count}</span>
                <br/>
                <div style={mainStyle1}>
                    <button onClick={this.resumeInterval}>{this.state.nameButtonStart}</button>
                    <button onClick={this.clearInterval}>reset</button>
                </div>

            </div>
        );
    }


}

export default App;


const mainStyle = {position: 'absolute', left: '0', right: '0', margin: 'auto', width: '350px'}
const mainStyle1 = {position: 'absolute', left: '0', right: '0', margin: 'auto', width: '430px'}
// const countStyle = {position:'absolute'}