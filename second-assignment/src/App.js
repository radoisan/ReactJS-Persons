import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent'

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
    
    let letter = (<div>
      {this.state.words[0].word.split('').map(letters => {
        return <CharComponent char={letters}/>
      })}
    </div>)
    

    return (
      <div className="App">
        <input type="text" value={this.state.words[0].word} onChange={this.changeListener} />
        <p>Text lenght: {this.state.words[0].word.length} </p> 
        <ValidationComponent wordlen={this.state.words[0].word.length} />               
        {letter}
      </div>
    );
  }
}

export default App;
