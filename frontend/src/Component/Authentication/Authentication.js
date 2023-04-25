import React, {Component} from 'react';
import SignIn from "./SignIn";
import SignUp from "./SignUp";

class Authentication extends Component {
    state = {
        value: this.props.value
    }
    render() {
        return (
            <div>
                {this.state.value === 1? <SignIn/> : <SignUp/>}
            </div>
        );
    }
}

export default Authentication;