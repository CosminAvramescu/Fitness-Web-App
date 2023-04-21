import React, {Component} from 'react';
import SignIn from "./SignIn";
import SignUp from "./SignUp";

class Authentication extends Component {
    render() {
        return (
            <div>
                <SignIn/>
                <SignUp/>
            </div>
        );
    }
}

export default Authentication;