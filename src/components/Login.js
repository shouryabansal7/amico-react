import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { clearAuthState, login } from '../actions/auth';

class Login extends Component {
  constructor(props) {
    super(props);
    // this.emailInput = React.createRef();
    // this.passwordInput = React.createRef();
    this.state = {
      email: '',
      password: '',
    };
  }
  componentWillUnmount() {
    this.props.dispatch(clearAuthState());
  }

  handleEmailChange = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  handlePasswordChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    // console.log('this.emailInputRef', this.emailInput);
    // console.log('this.passwordInputRef', this.passwordInput);
    //console.log('state', this.state);
    const { email, password } = this.state;
    if (email && password) {
      this.props.dispatch(login(email, password));
    }
  };
  render() {
    const { inProgress, error, isLoggedIn } = this.props.auth;
    const { from } = this.props.location.state || { from: { pathname: '/' } };
    if (isLoggedIn) {
      return <Redirect to={from} />;
    }
    return (
      <form className="login-form">
        <span className="login-signup-header">Log In</span>
        {error && <div className="alert error-dialog">{error}</div>}
        <div className="field">
          <input
            type="email"
            placeholder="Email"
            required
            // ref={this.emailInput}
            onChange={this.handleEmailChange}
            value={this.state.email}
          />
        </div>
        <div className="field">
          <input
            type="password"
            placeholder="Password"
            required
            // ref={this.passwordInput}
            onChange={this.handlePasswordChange}
            value={this.state.password}
          />
        </div>
        <div className="field">
          {inProgress ? (
            <button onClick={this.handleFormSubmit} disabled={inProgress}>
              Logging In...
            </button>
          ) : (
            <button onClick={this.handleFormSubmit} disabled={inProgress}>
              Log In
            </button>
          )}
        </div>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

export default connect(mapStateToProps)(Login);
