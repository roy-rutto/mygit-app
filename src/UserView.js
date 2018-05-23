import React, { Component } from 'react';
import ReposView from './ReposView';
import { getRepos } from './connector';
import './UserView.css';
class UserView extends Component {
  constructor(props) {
    super(props);
    this.state = {
        repos: [],
    };
  }

  render() {
    return (
      <div className="user">
       <ul>
           <li><img className="avatar" src={ this.props.user.avatar_url }></img></li>
           <li><b>Name: </b> { this.props.user.login }</li>
           <li><b>Company: </b>{ this.props.user.company }</li>
           <li><b>Email: </b> { this.props.user.email }</li>
           <li><b>Followers: </b>{ this.props.user.followers }</li>
           <li><b>Updated at: </b>{ this.props.user.updated_at }</li>
           
       </ul>
       <br/>
       <a href='#' onClick={(e) => {
           getRepos(this.props.user.login, (repos)=> (this.setState ({repos})))}}> Show User Repos</a>
    
      {this.state.repos && this.state.repos.length> 0? <ReposView repos={this.state.repos}/>: null}
      </div>
    );
  }
}

export default UserView;
