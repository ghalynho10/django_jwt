import React, { Component } from "react";
import axiosInstance from "../axiosApi";
import { connect } from 'react-redux'
import * as actions from '../store/actions/auth'


class Login extends Component {
  //   constructor(props) {
  //     super(props);
  //   }

  state = {
    username: "",
    password: ""
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onLogin(this.state.username, this.state.password)
    // axiosInstance.post('/token/obtain/', {
    //   username: this.state.username,
    //   password: this.state.password
    // })
    //   .then(response => {
    //     axiosInstance.defaults.headers['Authorization'] = "JWT " + response.data.access;
    //     localStorage.setItem('access_token', response.data.access);
    //     localStorage.setItem('refresh_token', response.data.refresh);
    //   }
    //   )
    //   .catch(error => {
    //     throw error;
    //   })
  };

  render() {
    return (
      <div>
        <h2>Login page</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Username:
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}



const mapDispatchToProps = dispatch => {
  return {
    onLogin: (username, password) => dispatch(actions.authLogin(username, password))
  }
}


export default connect(null, mapDispatchToProps)(Login);
