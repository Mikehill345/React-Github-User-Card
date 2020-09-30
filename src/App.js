import React from "react";
import Usercard from "./components/Usercard";
import "./App.css";
import axios from 'axios'
import styled from 'styled-components'

const StyledDiv = styled.div`
display:flex;
flex-direction:column;
align-items:center;
`

class App extends React.Component {
  state = {
    user: [],
    followers: [],
    username: 'mikehill345'
  };

  fetchUser() {
    axios.get(`https://api.github.com/users/${this.state.username}`)
      .then((res) => {
        this.setState({
          user: res.data
        })
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        this.setState({username:''})
      })
  }

  handleSearch = (e) => {
    e.preventDefault()
    this.fetchUser(this.state.username)
    this.fetchFollowers(this.state.username)
  }

  onChange = (e) => {
    this.setState({ username: e.target.value })
  };


  fetchFollowers() {
    axios.get(`https://api.github.com/users/${this.state.username}/followers`)
      .then((res) => {
        console.log(res.data)
        this.setState({
          followers: res.data
        })
      })
      .catch((err) => {
        console.log(err);
      });
  }

  componentDidMount() {
    this.fetchUser(this.state.username);
    this.fetchFollowers(this.state.followers);
  }

  render() {
    return (
      <StyledDiv className="App">
        <h1>GitHub Users of People we Like</h1>
        <form onSubmit={this.handleSearch}>
          <input
            type='text'
            value={this.state.username}
            placeholder='Search'
            onChange={this.onChange}
          />
          <button type='submit'>Submit</button>
        </form>
        <Usercard user={this.state.user} followers={this.state.followers} />
      </StyledDiv>
    );
  }
}
export default App;