import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import logo from './logo.png';
import pride from "./pride.png"
// import bootstrap from "bootstrap/dist/css/bootstrap.css"
// import "../styles.css";

class Login extends Component {
  render() {
    return (
      <div>
        <div className="wrapper fadeInDown">
            <div id="formContent">
                <div className="fadeIn first">
                    <img src={pride} id="icon" alt="logo" />
                    <h1>Jica Pride Farmers</h1>
                </div>
                <form>
                    <input type="text" id="login" className="fadeIn second" name="login" placeholder="username" />
                    <input type="text" id="password" className="fadeIn third" name="login" placeholder="password" />
                    <input type="submit" className="fadeIn fourth" value="Log In"/>
                </form>
            </div>
        </div>
      </div>
    )
  }
}
export default Login
