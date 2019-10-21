import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';
import Radium from 'radium';


class App extends Component {
  state = {
    persons: [
      {id: '1asd', name: 'Rado', age: 28},
      {id: '2qwe', name: 'Kiro', age: 33},
      {id: '3zxc', name: 'Stef', age: 33}
    ],
    otherState: 'Some other state',
    showPersons: false
  }

  nameChangeHandler = ( event, id ) => {
    // Fetching the position(index) of the name with which we wanna work.
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    // Making direct copy of the original object with which we wanna work.
    const person = {
      ...this.state.persons[personIndex]
    };
    // Another way of copying the object values. 
    // const person = Object.assign({}, this.state.persons[personIndex]);
    
    // update person name
    person.name = event.target.value;

    //update the main array at current index
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons})
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;  
    this.setState({showPersons: !doesShow});
  }

  deletePersonHandler = (personIndex) => {
    /* Two way to add state immutability, because obj and array 
    are reference types, we need to copy the actual value, 
    with which we wanna work with. It's more safety and it's 
    good practice. First is with slice() method second is with
    arr destructuring operator */
    //const persons = this.state.persons.slice();

    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  render() {
    const style = {
     /* backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid green',
      padding: '8px',
      cursor: 'pointer'
    */
      backgroundColor: '#4CAF50', 
      border: 'none',
      color: 'white',
      padding: '15px 32px',
      textAlign: 'center',
      textDecoration: 'none',
      display: 'inline-block',
      fontSize: '16px',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    let persons = null;

    if(this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age} 
              key={person.id} 
              changed={(event) => this.nameChangeHandler(event, person.id)} />
          })} 
        </div>
      );
      // changed style dynamically
      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
    }
    // Defined style classes, as an array, and we use them with className property 
    // we used join(' ') because we need to pass string to className instead of array
    const classes = [];
    if (this.state.persons.length <= 2){
      classes.push('red')
    }
    if (this.state.persons.length <= 1){
      classes.push('bold')
    }

    return (
      <div className="App">

        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(' ')}>This is really working!!!</p>

        <button style={style} onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
  }
}

export default Radium(App);
