import React from 'react';

export class Form extends React.Component {

    state = {
        firstName: '',
        email: '',
        message: '',
        select: '',
        subscription: false,
        gender: ''
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    handleChecked = (event) => {
        this.setState({subscription: event.target.checked})
    }

    valideteName = () => {
        if (this.state.firstName.length < 12){
            alert('Ошибка валидации firstname')
        }
    }

    validateEmail = () => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(this.state.email)) {
            alert('Ошибка валидации email')
        }
    }

    render() {
        const { firstName, email, message, select, subscription,gender } = this.state;

        return (
            <div>
                <input type="email"
                       name="email"
                       placeholder="email"
                       value={email}
                       onChange={this.handleChange}
                       onBlur={this.validateEmail}
                />
                <br/>
                <textarea name="message" value={message} onChange={this.handleChange}/>
                <br />
                <select name="select" value={select} onChange={this.handleChange}>
                    <option value="" disabled></option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>

                <br/>
                <input
                    type="checkbox"
                    name="subscription"
                    checked={subscription}
                    onChange={this.handleChecked}
                />
                
                <br/>
                <input type="radio" name="gender" value="male" checked={this.state.gender === 'male'}  onChange={this.handleChange}/> Male
                <input type="radio" name="gender" value="female" checked={this.state.gender === 'female'} onChange={this.handleChange}/> Female

            </div>
        )
    }

}