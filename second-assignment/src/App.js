import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent'

class App extends Component {

  state = { 
    userInput: ''
  }

  changeListener = (event) => {
    this.setState({userInput: event.target.value})
  }

  deleteCharHandler = (charIndex) => {
    const charArr = this.state.userInput.split('');
    charArr.splice(charIndex, 1);
    const updatedText = charArr.join('');
    this.setState({userInput: updatedText});
  }

  render() {
    
    let letter = (<div>
      {this.state.userInput.split('').map((letters, index) => {
        return <CharComponent 
        char = {letters}
        key={index}
        click = {() => this.deleteCharHandler(index)}
        />
        
      })}
    </div>)
    

    return (
      <div className="App">
        <input type="text" value={this.state.userInput} onChange={this.changeListener} />
        <p>Text lenght: {this.state.userInput.length} </p> 
        <ValidationComponent wordlen={this.state.userInput.length} />               
        {letter}
      </div>
    );
  }
}

export default App;
