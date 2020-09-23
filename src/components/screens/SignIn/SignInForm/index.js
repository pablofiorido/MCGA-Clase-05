import './style.css'
import React from 'react'
import { Field } from 'react-final-form'

function SignInForm(props) {

    return (
        <form className="SignInForm" onSubmit={props.handleSubmit}>
            <h2>Formulario de ejemplo</h2>
            <div>
                <label>mail</label>
                <Field name="email" component="input" placeholder="email" />
            </div>
            <div>
                <label>Password</label>
                <Field name="password" component="input" placeholder="******" />
            </div>

            <button type="submit">Enviar</button>
        </form>
    )

}


export default SignInForm