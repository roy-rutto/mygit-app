import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { getUser } from './connector';
import UserView from './UserView';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
        username: '',
        user: {}
    };
}
//Seach user using github connector
searchUser = () => {
  function callback(user){
    this.setState({user});
  }
  getUser(this.state.username, callback.bind(this))
}

render() {
    return (
    <div className="search">
        <label>Username:</label>
        <input name='search' onChange={(e) => {this.setState({username: e.target.value})}}/>
        <br/>
        <button type="button" onClick={this.searchUser}>Search</button>
        {this.state.user.login ?  <UserView user={this.state.user}/> : null}
    </div>
    );
}
}

export default Search;