import React, { Component } from 'react';

import * as firebase from 'firebase';

class Login extends Component {
  auth = undefined;
  firebaseConfig = undefined;

  constructor() {
    super();
    this.authenticate = this.authenticate.bind(this);
    this.logout = this.logout.bind(this);
    // Your web app's Firebase configuration
    this.firebaseConfig = {
      apiKey: "AIzaSyASDnceYybPTWyYN2kMaaDkS4DtcXkRTaY",
      authDomain: "default-app-7c4e7.firebaseapp.com",
      databaseURL: "https://default-app-7c4e7.firebaseio.com",
      projectId: "default-app-7c4e7",
      storageBucket: "default-app-7c4e7.appspot.com",
      messagingSenderId: "382315184552",
      appId: "1:382315184552:web:dfb50d6b4958cee7625d9d",
      measurementId: "G-S63MWKY570"
    };

    this.state = {
      user: undefined
    }

  }

  componentDidMount() {
    firebase.initializeApp(this.firebaseConfig);
    firebase.analytics();
    this.auth = firebase.auth();

    this.auth.onAuthStateChanged((response) => {
      console.log("onAuthStateChanged");
      if (response) {
        console.log("user in");
        this.setState({
          user: response
        });
        console.log(response.email);
        localStorage.setItem('firebase_auth', this.state.user);
      } else {
        console.log("user out");
        this.setState({
          user: undefined
        });
        localStorage.removeItem('firebase_auth');
      }
    });
  }

  authenticate(event) {
    event.preventDefault();
    this.auth.signInWithEmailAndPassword(this.refs.email.value, this.refs.password.value).then(response => {
      console.log(response);
      this.setState({
        user: response
      });
    }).catch(function (error) {
      console.log(error.message);
    });
  }

  logout() {
    this.auth.signOut();
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-3">
          </div>
          <div className="col-6">
            <div className="container-fluid card-login">
              <div className="card card-shadow">
                <img className="card-img-top img-login align-self-center" src={require('../logo.svg')} alt="Firebase" />
                <div className="card-body">
                  <form onSubmit={this.authenticate}>
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Email address</label>
                      <input type="email" ref="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputPassword1">Password</label>
                      <input type="password" ref="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <button type="submit" className="btn btn-primary btn-block">Login</button>
                    {
                      this.state.user !== undefined ?
                      <button type="buttom" onClick={this.logout} className="btn btn-secondary btn-block">Sair</button>
                      : ''
                    }
                  </form>
                </div>
              </div>

            </div>
          </div>
          <div className="col-3">
          </div>
        </div>
      </div>
    );
  }
}

export default Login;