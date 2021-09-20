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


    handlerSomething(){
        console.log('app.js')
    }

    render() {
        return (
            <div className="App">
                <Posts posts={this.state.posts} cb={this.handlerSomething}/>
            </div>
        );
    }


}

export default App;

