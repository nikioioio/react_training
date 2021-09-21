import React from 'react';

export class Form extends React.Component {

    state = {
        email: '',
        agree: false,
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    handleCheck = (event) => {
        this.setState({[event.target.name]: event.target.checked})
    }

    handleButton = () => {
        if (!this.state.agree) {
            alert('Вы не согласились с условиями!')
        }

        if (!this.validateEmail(this.state.email)()){
            alert('Ошибка валидации email')
        }

        if (this.state.agree && this.validateEmail(this.state.email)()) {
            alert('Поздравляем с регистрацией!')
            this.setState({email: '', agree: ''})
        }


    }


    validateEmail = (str = '') => {
        return () => {
            const strValidate = str ? str : this.state.email;
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (!re.test(strValidate)) {
                // alert('Ошибка валидации email')
                return false
            }
            return true
        }

    }

    render() {
        const {email, agree} = this.state;

        return (
            <div>
                <input type="email"
                       name="email"
                       placeholder="email"
                       value={email}
                       onChange={this.handleChange}
                       onBlur={this.validateEmail(this.state.email)}
                />

                <br/>

                <input
                    type="checkbox"
                    name="agree"
                    checked={this.state.agree}
                    onChange={this.handleCheck}
                /> I agree with terms and conditions

                <br/>
                <button onClick={this.handleButton}>Send</button>

            </div>
        )
    }

}