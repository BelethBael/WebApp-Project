import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";
import Profile from './components/Profile'
import Home from './components/Home'
import Post from './components/Post'
import Login from './components/Login'

import React from 'react';

import auth from './firebase/Auth';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      auth: false
    }
  }

  componentDidMount() {
    // auth.loginChecking(this.login, this.unLogin)
  }

  login = (id, auth) => {
    console.log("login2")
    this.props.history.push("/home");

  }

  unLogin = (auth) => {
    console.log("unlogin2")
    this.props.history.push("/home");
  }

  render() {
    return (
      <div>
        <Switch>

          <Route exact path="/" component={Home} />

        </Switch>

      </div>
    )
  }
}

export default withRouter(App);
