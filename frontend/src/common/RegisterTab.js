import React, { useState } from 'react';
import './common.css';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import Typography from '@material-ui/core/typography';

//The Login Tab of the Modal.
const RegisterTab = function (props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [registered, setRegistered] = useState(false);

    const emailChangedHandler = function (e) {
        setEmail(e.target.value);
    }

    const passwordChangedHandler = function (e) {
        setPassword(e.target.value);
    }
    
    function formSubmit(){}

    return (

        <div className="center paddedtop">


            <br /><br />

            <ValidatorForm className="subscriber-form center-field" onSubmit={formSubmit}>
                <div className="center-div">
                    <TextValidator
                        id="email"
                        label="Email *"
                        type="text"
                        name="email"
                        onChange={emailChangedHandler}
                        value={email}
                        validators={['required', 'isEmail']}
                        errorMessages={['required']}
                    >
                    </TextValidator>
                </div>
                <br />

                <div className="center-div">
                    <TextValidator
                        id="password"
                        type="text"
                        name="password"
                        onChange={passwordChangedHandler}
                        label="Password *"
                        value={password}
                        validators={['required']}
                        errorMessages={['required']}
                    ></TextValidator>
                </div>

                {
                    registered &&
                    <div><Typography>Registration Successful. Please Login!</Typography></div>

                }

                <br /><br />

                <div className='center'>

                    <Button variant="contained" color="primary" type="submit" onClick={() => props.register(email, password)}>
                        Register
                    </Button>
                    <br /><br />
                </div>
            </ValidatorForm>
            <br /><br />
        </div>
    )
}

export default RegisterTab;