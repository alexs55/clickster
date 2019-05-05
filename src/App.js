import React, { Component } from 'react';
import './App.css';
import Jumbotron from './components/Jumbotron';
import Header from './components/hue';
import Card from './components/Card';
import Wrapper from './components/Wrapper'
import cards from './cards.json';



class App extends Component {
  state = {
    cards,
    score: 0,
    highscore: 0
  };
  



  gameOver = () => {
    if (this.state.score > this.state.highscore) {
      this.setState({ highscore: this.state.score }, function () {
        console.log(this.state.highscore);
      });
    }
    this.state.cards.forEach(card => {
      card.Count = 0;
    });
    alert(`Game Finished! :( \nscore: ${this.state.score}`);
    this.setState({ score: 0 });
    return true;
  }

  clickCount = id => {
    this.state.cards.find((o, i) => {
      if (o.id === id) {
        if (cards[i].Count === 0) {
          cards[i].Count = cards[i].Count + 1;
          this.setState({ score: this.state.score + 1 }, function () {
            console.log(this.state.score);
          });
          this.state.cards.sort(() => Math.random() - 0.5)
          return true;
        } else {
          this.gameOver();
        }
      }
    });
  }

  render() {
    return (<div>
      <Header score={this.state.score} highscore={this.state.highscore}>Clicky Game</Header>
      <Jumbotron />
      <Wrapper>
        {this.state.cards.map(card => (
          <Card
            id={card.id}
            key={card.id}
            image={card.image}
            clickCount={this.clickCount}
          />
        ))}
      </Wrapper>
    </div>
    );
  }

}
export default App;
