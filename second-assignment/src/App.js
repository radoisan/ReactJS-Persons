import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    words: [
      {word: 'Hello'}
    ],
  }

  changeListener = (event) => {
    /*const wordIndex = this.state.word.findIndex(w => {
      return w.words === word;
    })

    const word = {...this.state.words[wordIndex]};
    words.word = event.target.value;

    const words = [...this.state.words];
    words = word;

    this.setState({
      words: words
    })*/
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
