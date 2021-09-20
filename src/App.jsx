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
        posts: [],
        loading: true,
        comments: []
    }
    //во время запуска
    async componentDidMount() {
        console.log('componentDidMount');
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const json = await response.json();
        this.setState({posts: json, loading: false})

        this.timerId = setInterval(async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/comments');
            const json = await response.json();
            this.setState({comments: json})
        }, 3000)

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate');

    }

    componentWillUnmount() {
        clearInterval(this.timerId)
    }


    render() {
        return (
            <div className="App">
                {this.state.loading ? <h3>Loading...</h3> : <h3>
                    {this.state.posts.length} was loaded
                </h3>}
            </div>
        );
    }


}

export default App;


const countStyle = {margin: '0 2rem'}