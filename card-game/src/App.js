import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Nav from './components/Nav';
import CardWrapper from './components/CardWrapper';
import friends from "./friends.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Nav />
        <CardWrapper>
          {this.state.friends.map(friend => (
            <FriendCard
              clickFriend={this.clickFriend}
              id={friend.id}
              key={friend.id}
              name={friend.name}
              image={friend.image}
            />
          ))}
        </CardWrapper>
      </Wrapper>
    );
  }
}

export default App;
