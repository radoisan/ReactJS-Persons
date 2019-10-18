import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';


class App extends Component {
  state = {
    persons: [
      {name: 'Rado', age: 28},
      {name: 'Kiro', age: 33},
      {name: 'Stef', age: 33}
    ],
    otherState: 'Some other state',
    showPersons: false
  }

  switchNameHandler = (newName) => {
    //console.log('Was clicked!')
    // DON'T DO THIS this.state.persons[0].name = 'Radoslav';
    this.setState({
      persons: [
        {name: newName, age: 28},
        {name: 'Kiril', age: 33},
        {name: 'Stefania', age: 33}
      ]
    })
  }
  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        {name: 'Rado', age: 28},
        {name: event.target.value, age: 33},
        {name: 'Stefania', age: 33}
      ]
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;  
    this.setState({showPersons: !doesShow});
  }

  render() {

    let persons = null;

    if(this.state.showPersons){
      persons = (
        <div>
           <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age} />

          <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Radoslav!!')}
          changed={this.nameChangeHandler}>My Hobbies: Racing</Person>

          <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age} />
        </div>
      );
    }

    return (
      <div className="App">

        <h1>Hi, I'm a React App</h1>
        <p>This is really working!!!</p>

        <button className="primary" onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
  }
}

export default App;
