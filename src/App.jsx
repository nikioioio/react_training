import React from "react";


class App extends React.Component {

    state = {
        posts:[
            {id: 'abc', name: 'JS Basis'},
            {id: 'abc2', name: 'JS Adv'},
            {id: 'abc3', name: 'ReactJs'},
        ]
    }




    render() {
        return (
            <div className="App">
                {this.state.posts.map(post => <h2 key={post.id}>{post.name}</h2>)}
            </div>
        );
    }


}

export default App;

