import './style.css';
import React from 'react';
import { Form } from 'react-final-form'
import SignInForm from './SignInForm';


class SignIn extends React.Component {


    onSubmit(values) {
        console.log("submitting form", values)
    }

    validate(values) {
        if (values && values.firstName && values.firstName.Length < 3) {

            console.log("el nombre debe ser mayor a 3 caracteres")
        }
        console.log("validating form", values)
    }


    render() {
        return (
            <div className="SignIn">
                <h1>SignIn</h1>
                <Form
                    onSubmit={this.onSubmit}
                    validate={this.validate}
                    render={SignInForm}
                />
            </div>
        );
    }
}
export default SignIn;
