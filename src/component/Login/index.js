import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from 'prop-types';

import { loginUser } from "../../actions/employee";
import { USERNAME, PASSWORD } from "./constants";
import '../../styles.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: "",
      error: "",
    };
  }

  onChangeTextField= (name, value) => {
    this.setState({ [name]: value });
  }

  onLoginClick = () => {
    const { userName, password } = this.state;
    const { loginUser, history } = this.props;
    if (this.validateLogin(userName, password)) {
        loginUser(history);
    }
  };

  validateLogin = (userName, password) => {
    let error = '';
    let isValid = true;
    if (userName.length === 0 || password.length === 0) {
      error = 'Please enter username and password';
      isValid = false;
    } else if(USERNAME !== userName ) {
        error = 'Please enter valid username';
        isValid = false;
    } else if(PASSWORD !== password ) {
        error = 'Please enter valid password';
        isValid = false;
    }
    this.setState({
      error,
    });
    setTimeout(() => {
      this.setState({
        error: '',
      });
    }, 3000);
    return isValid;
  };

  render() {
    const { userName, password, error } = this.state;

    return (
        <div className="login-container">
        <div className="login-section">
        {error !== '' &&
            error !== undefined && (
              <div className="alert alert-success" role="alert">
                {error}
              </div>
            )}
          <h2>Login</h2>
          <div className="pt-4">
            <label>
              <b>Username *</b>
            </label>
                <input
                  type="text"
                  value={userName}
                  placeholder="Enter Username"
                  onChange={e => this.onChangeTextField("userName", e.target.value)}
                />
            <label>
              <b>Password *</b>
            </label>
            <input
              type="password"
              value={password}
              placeholder="Enter Password"
              onChange={e => this.onChangeTextField("password", e.target.value)}
            />
            <button type="submit" onClick={this.onLoginClick}>
              Login
            </button>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
});

export default connect( mapStateToProps, {loginUser})(Login);
