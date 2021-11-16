import React, { useState } from 'react';
import './common.css';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

const onFormSubmitted = function () { }

//The Login Tab of the Modal.
//The onClickHandler of the Login Button on the modal is defined as login function in Header.js and passed to this function as a prop.
const LoginTab = function (props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const usernameChangedHandler = function (e) {
        setUsername(e.target.value);
    }

    const passwordChangedHandler = function (e) {
        setPassword(e.target.value);
    }

    return (

        <div className="center paddedtop">


            <br /><br />

            <ValidatorForm className="subscriber-form" onSubmit={onFormSubmitted}>

                <TextValidator
                    id="username"
                    label="Email *"
                    type="text"
                    name="username"
                    onChange={usernameChangedHandler}
                    value={username}
                    validators={['required']}
                    errorMessages={['Username cannot be empty']}
                >
                </TextValidator>

                <br />

                <TextValidator
                    id="password"
                    type="text"
                    name="password"
                    onChange={passwordChangedHandler}
                    label="Password *"
                    value={password}
                    validators={['required']}
                    errorMessages={['Password cannot be empty']}
                ></TextValidator>

                <br /><br />

                <div className='center'>
                    <Button variant="contained" color="primary" type="submit" onClick={() => props.onClickHandler(username, password)}>
                        LOGIN
                    </Button>
                    <br /><br />
                </div>
            </ValidatorForm>
            <br /><br />
        </div>
    )
}

export default LoginTab;