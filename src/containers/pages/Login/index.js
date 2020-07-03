import React, { Component } from 'react';
import {connect} from 'react-redux';
import { loginUserAPI } from '../../../config/redux/action';
import './Login.css';
import Button from '../../../components/atoms/Button';
import { BrowserRouter as Router } from 'react-router-dom';


class Login extends Component {
    state = {
        email: '',
        password: '',
    }
    
    handleChangeText = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleLoginSubmit = async (e) => {
        e.preventDefault();
        const { email, password } = this.state;
        const { history } = this.props;
        const res = await this.props.loginUserAPI({ email, password }).catch(err => err);
        if(res) {
            this.setState({
                email: '',
                password: ''
            });
            history.push('/')
        } else {

        }
    };

    render() {
        return(
           <Router>

            <div className="container">
                <div className="signup">Sign In</div>
                    <div className="google">
                        <i className="fa fa-google" aria-hidden="true"></i>
                        <p>Sign in with Google</p>
                    </div>
                    <div className="or">or sign In with email</div>
                        <form>
                            <div className="fullname">
                                <label htmlFor="email">Email</label>
                                <br/>
                                <input type="text" id="email" placeholder="jhondoe@email.com" onChange={this.handleChangeText} />
                            </div>
                            <div className="email">
                                <label htmlFor="password">Password</label>
                                <br />
                                <input type="password" id="password" placeholder="Password..." onChange={this.handleChangeText} />
                            </div>
                            <Button title="Login" loading={this.props.isLoading} onClick={this.handleLoginSubmit} />
                        </form>
                    <div>
                    <span className="already">Didn't have an account <a href="/register" className="login">Register</a> </span>
                </div>
            </div>
           </Router> 
        );
    }
}


const reduxState = (state) => ({
    isLoading: state.isLoading
});

const reduxDispatch = (dispatch) => ({
    loginUserAPI: (data) => dispatch(loginUserAPI(data))
});

export default connect(reduxState, reduxDispatch)(Login);