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
    friends,
    clickCount: 0, //regularscore
    topScore: 0
  };

  //attempting shuffling
shuffleArray = (array) => {
    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  clickFriend = () => {
    this.setState({
      clickCount: this.state.clickCount++
    });
    this.shuffleArray(this.state.friends);
    return this.state.clickCount
    console.log(this.state.clickCount)
  }


  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Nav
          userclicks={this.state.clickCount}
          topscore={this.state.topScore}
        />
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
