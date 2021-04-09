import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GoogleLogin } from 'react-google-login';
import Form from 'react-bootstrap/Form'

export default class LoginRegisterPage extends React.Component {
    state = {
        heading: [
            "Register Now",
            "Login to your account",
            "To get full access to our awesome product!",
            "You can do way more, when your a member. Register now to reap the benefits!",
        ],
        text: false
    };
    handleToggle = (e) => {
        e.preventDefault();
        this.setState((prevState) => ({ text: !prevState.text }));
    }
    handleSuccess = (res) => {
        console.log(res);
    }
    handleSubmit = (e) => {
        e.preventDefault();
        if (!this.state.text) {
            const email = e.target.elements.lemail.value.trim();
            let isValidMail = true;
            const pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(email)) {
                isValidMail = false;
            }
            const password = e.target.elements.lpassword.value.trim();
            if (!email.length > 0 || !password.length > 0) {
                toast.error('🦄 Fill up the login form', {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            } else if (!isValidMail) {
                toast.error('🦄 Not a valid email!', {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
        } else {
            const email = e.target.elements.remail.value.trim();
            let isValidMail = true;
            const pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(email)) {
                isValidMail = false;
            }
            const password = e.target.elements.rpassword.value.trim();
            const repeatPassword = e.target.elements.rpwrepeat.value.trim();
            if (!email.length > 0 || !password.length > 0 || !repeatPassword.length > 0) {
                toast.error('🦄 Fill up the registration form', {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            } else if (!isValidMail) {
                toast.error('🦄 Not a valid email!', {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            } else if (password !== repeatPassword) {
                toast.error('🦄 Repeat Password did not match!', {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
        }
    }
    render() {
        return (
            <div className="logreg">
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
                <Form className="form" onSubmit={this.handleSubmit}>
                    {!this.state.text ?
                        <div className="container form-group">
                            <GoogleLogin
                                clientId="105889626819-jat0c491e7444vpp7hqhvfasa68ep48j.apps.googleusercontent.com"
                                render={renderProps => (
                                    <button className="button" onClick={renderProps.onClick} disabled={renderProps.disabled}>
                                        <i className="fab fa-google"></i> Login with Google
                                    </button>
                                )}
                                buttonText="Login with Google"
                                onSuccess={this.handleSuccess}
                                onFailure={res => console.log(res)}
                                cookiePolicy={'single_host_origin'}
                                className="glogin"
                            />
                            <input type="text" className="input form-control" name="lemail" placeholder="User email" />
                            <input type="password" className="input form-control" name="lpassword" placeholder="Password" />
                            <button type="submit" className="button">Login</button>
                            <p>OR</p>
                            <button onClick={this.handleToggle} className="button">Do not a account?</button>
                        </div>
                        :
                        <div className="container form-group">
                            <GoogleLogin
                                clientId="105889626819-jat0c491e7444vpp7hqhvfasa68ep48j.apps.googleusercontent.com"
                                render={renderProps => (
                                    <button className="button" onClick={renderProps.onClick} disabled={renderProps.disabled}>
                                        <i className="fab fa-google"></i> Register with Google
                                    </button>
                                )}
                                buttonText="Register with Google"
                                onSuccess={this.handleSuccess}
                                onFailure={res => console.log(res)}
                                cookiePolicy={'single_host_origin'}
                                className="glogin"
                            />
                            <input type="text" className="input form-control" name="rfname" placeholder="First name" />
                            <input type="text" className="input form-control" name="rlname" placeholder="Last name" />
                            <input type="email" className="input form-control" name="remail" placeholder="email address" />
                            <input type="password" className="input form-control" name="rpassword" placeholder="Password" />
                            <input type="password" className="input form-control" name="rpwrepeat" placeholder="Repeat password" />
                            <button type="submit" className="button">Register</button>
                            <p>OR</p>
                            <button onClick={this.handleToggle} className="button">Already have a account?</button>
                        </div>
                    }
                </Form>
            </div>
        );
    }
}