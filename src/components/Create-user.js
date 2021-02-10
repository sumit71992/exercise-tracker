import React, { Component } from 'react';
import axios from "axios";

export default class CreateUser extends Component {
  constructor(props) {
    super(props);
    
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      username: '',
      password: ''
    };
  }
  onSubmit(e) {
    e.preventDefault();
    const newUser = {
      username: this.state.username,
      password: this.state.password,
    };
    console.log(newUser);
    axios.post('http://localhost:5000/users/add', newUser)
  .then(res => console.log(res.data));
    this.setState({
      username: '',
      password: ''
    })
  }
  render() {
    return (
      <div>
  <h3>Create New User</h3>
  <form onSubmit={this.onSubmit}>
    <div className="form-group"> 
      <label>Username: </label>
      <input  type="text"
          required
          className="form-control"
          value={this.state.username}
          onChange={(e)=>{this.setState({username:e.target.value})}}
          />
           <label>Password: </label>
      <input  type="text"
          required
          className="form-control"
          value={this.state.password}
          onChange={(e)=>{this.setState({password: e.target.value})}}
          />
    </div>
    <div className="form-group">
      <input type="submit" value="Create User" className="btn btn-primary" />
    </div>
  </form>
</div>
    )
  }
}