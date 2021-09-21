import React from 'react';
import {Form} from "./Form";

export class FormWithRef extends React.Component {

    constructor() {
        super();

        this.cardRef = React.createRef();
        this.emailRef = React.createRef();


    }


    handlerSubmit = (event) => {
        event.preventDefault();
        if (this.cardRef.current.value.length < 16){
            alert('Что то пошло не так');
            return
        }
        // if....с this.emailRef

    }

    render() {

        return (
            <form onSubmit={this.handlerSubmit} >
                <input type="text"
                       name="card"
                       placeholder="card"
                       ref={this.cardRef}
                />


                <input type="email"
                       name="email"
                       placeholder="email"
                       ref={this.emailRef}
                />
                <button>Send</button>
            </form>
        )
    }

}