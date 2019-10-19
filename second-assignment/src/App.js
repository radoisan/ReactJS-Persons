import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    words: [
      {word: 'Hello'}
    ],
  }

  changeListener = (event) => {
  
    this.setState({
      words: [
        {word: event.target.value}
      ]
    })

  }

  render() {
    return (
      <div className="App">
        <input type="text" value={this.state.words[0].word} onChange={this.changeListner} />
        <p> {this.state.words[0].word.length} </p>                
      </div>
    );
  }
}

export default App;
