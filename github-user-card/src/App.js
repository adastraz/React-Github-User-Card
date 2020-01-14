import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import UserCard from './UserCard'
class App extends Component{
  state = {
    followers: [],
    tyler: []
  }
  componentDidMount(){
    axios.get(`https://api.github.com/users/adastraz/followers`)
      .then (res => {
        console.log(res)
        this.setState({followers: res.data})
      })
      .catch(err => {
        console.log(err)
      })
      axios.get(`https://api.github.com/users/adastraz`)
      .then (res => {
        console.log(res)
        this.setState({tyler: res.data})
      })
      .catch(err => {
        console.log(err)
      })
  }
  render(){
    return (
      <div className="App">
        <div className='users'>
          <div className='member'>
            <img src={this.state.tyler.avatar_url} />
            <h1>{this.state.tyler.login}</h1>
          </div>
          {this.state.followers.map(item => (
            <UserCard 
            users={item}
            key={item.id}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
