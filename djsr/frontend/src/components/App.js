import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import Hello from './Hello'
import axiosInstance from "../axiosApi";



class App extends Component {

  handleLogout = () => {
    axiosInstance.post('/blacklist/', {
      "refresh_token": localStorage.getItem("refresh_token")
    })
      .then(response => {
        localStorage.removeItem('access_token')
        localStorage.removeItem('refresh_token')
        axiosInstance.defaults.headers['Authorization'] = null
      })
      .catch(err => {
        console.log(err);

      })
  }


  render() {
    return (
      <div className="site">
        <nav>
          <Link className={"nav-link"} to={"/"}>
            Home
          </Link>
          <Link className={"nav-link"} to={"/login/"}>
            Login
          </Link>
          <Link className={"nav-link"} to={"/signup/"}>
            Signup
          </Link>
          <Link className={"nav-link"} to={"/hello/"}>
            Hello
          </Link>
          <button onClick={this.handleLogout} >Logout</button>
        </nav>
        <main>
          <h1>Ahhhh after all this bullshit I'm finally</h1>
          <Switch>
            <Route exact path={"/login/"} component={Login} />
            <Route exact path={"/signup/"} component={Signup} />
            <Route exact path={"/Hello/"} component={Hello} />
            <Route exact path={"/"} render={() => <div>Home again</div>} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
