import React, { Component } from "react";
import axiosInstance from "../axiosApi";

class Signup extends Component {
  //   constructor(props) {
  //     super(props);
  //   }

  state = {
    username: "",
    password: "",
    email: ""
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    axiosInstance.post('/user/create/', {
      username: this.state.username,
      password: this.state.password,
      email: this.state.email
    })
      .then(response => {
        console.log('it works');

      })
      .catch(err => {
        this.setState({
          errors: err.response.data
        })
      })
  };

  render() {
    return (
      <div>
        <h2>Signup page</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Username:
            <input
              name="username"
              type="text"
              value={this.state.username}
              onChange={this.handleChange}
            />
            {/* {this.state.errors.username ? this.state.errors.username : null} */}
          </label>
          <label>
            Email:
            <input
              name="email"
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
            {/* {this.state.errors.email ? this.state.errors.email : null} */}
          </label>
          <label>
            Password:
            <input
              name="password"
              type="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
            {/* {this.state.errors.password ? this.state.errors.password : null} */}
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Signup;
