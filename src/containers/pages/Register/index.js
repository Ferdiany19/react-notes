import React, { Component } from 'react';
import './Register.css';
import Button from '../../../components/atoms/Button';
import { connect } from 'react-redux';
import { registerUserAPI } from '../../../config/redux/action';
import { BrowserRouter as Router } from 'react-router-dom';

class Register extends Component {
    state = {
        email: '',
        password: '',
    }
    
    handleChangeText = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleRegisterSubmit = async (e) => {
        e.preventDefault();
        const { email, password } = this.state;
        const res = await this.props.registerAPI({ email, password }).catch(err => err);
        if(res) {
            this.setState({
                email: '',
                password: ''
            });
        }
    };

    render() {
        return(
            
        <Router>
            <div className="container">
                <div className="signup">Sign up for free</div>
                    <div className="google">
                        <i className="fa fa-google" aria-hidden="true"></i>
                        <p>Sign up with Google</p>
                    </div>
                    <div className="or">or sign up with email</div>
                        <form>
                            <div className="fullname">
                                <label htmlFor="email">Email</label>
                                <br/>
                                <input type="text" id="email" placeholder="jhondoe@email.com" onChange={this.handleChangeText} value={this.state.email} />
                            </div>
                            <div className="email">
                                <label htmlFor="password">Password</label>
                                <br />
                                <input type="password" id="password" placeholder="Password..." onChange={this.handleChangeText} value={this.state.password} />
                            </div>
                            <Button onClick={this.handleRegisterSubmit} title="Get Started" loading={this.props.isLoading} />
                        </form>
                    <div>
                        <span className="already">Already have an account? <a href="/login" className="login">Login</a>
                        </span>
                </div>
            </div>
        </Router>
        );
    }
}

const reduxDispatch = (dispatch) => ({
    registerAPI: (data) => dispatch(registerUserAPI(data))
})

const reduxState = (state) => ({
    isLoading: state.isLoading
})

export default connect(reduxState, reduxDispatch) (Register);