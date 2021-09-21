import React from "react";
import {Posts} from './Components/Posts'


class App extends React.Component {

    state = {
        posts:[
            {id: 'abc', name: 'JS Basis'},
            {id: 'abc2', name: 'JS Adv'},
            {id: 'abc3', name: 'ReactJs'},
        ]
    }


    removeEl = (id) => {
        this.setState({posts: this.state.posts.filter(post => post.id !== id)})
    }

    render() {
        return (
            <div className="App">
                <Posts posts={this.state.posts} removeEl={this.removeEl}/>
            </div>
        );
    }


}

export default App;

