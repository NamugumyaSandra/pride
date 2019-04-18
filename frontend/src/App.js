import React ,{ Component, Fragment} from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Nav from "./components/layout/Nav";
import About from "./components/layout/About";
import Login from "./components/layout/Login";
import Home from "./components/layout/Home";
import Farmers from "./components/farmer/Farmers";
import AddFarmer from "./components/farmer/AddFarmer";

import "./styles.css";
import "./styles.scss";

import { Provider } from 'react-redux';
import store from './store'

class App extends Component {
  render() {
    return (
        <Provider store = {store}>
            <Fragment>
                <Router>
                <div className="container">
                    < Nav />
                    <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route exact path="/about" component={About}></Route>
                    <Route exact path="/login" component={Login}></Route>
                    <Route exact path="/farmers" component={Farmers}></Route>
                    <Route exact path="/farmers/add" component={AddFarmer}></Route>
                    </Switch>
                </div>
                </Router>
            </Fragment>
        </Provider>
        
     )
  }
}

export default App;