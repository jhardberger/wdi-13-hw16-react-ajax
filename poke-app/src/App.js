import React, { Component } from 'react';
import Login from './login';
import MainContainer from './mainContainer'
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      logged: false,
      username: '' 
    }
  }
  handleLogin = (username, isLoggedIn) => {
    this.setState({
      username: username,
      logged: true
    });
  }
  render() {
    return (
      <div className="App">
        {this.state.logged ? <MainContainer username={this.state.username} /> : <Login handleLogin={this.handleLogin} />}
      </div>
    );
  }
}

export default App;
