import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


class Home extends Component {
  render() {
    return (
      <div className="container mt-4">
        <a class="btn btn-primary mr-4" href="/admin/login/">
          Login as Admin
        </a>
        <Link class="btn btn-success" to="/login">
          Login as Officer
        </Link>
      </div>
    );
  }
}
export default Home