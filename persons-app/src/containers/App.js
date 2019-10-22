import React, { Component } from 'react';
import Person from '../components/Persons/Person/Person';
import classes from './App.module.css';

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
    let persons = null;
    let btnClass = '';

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
      btnClass = classes.Red
    }

    // Defined style classes, as an array, and we use them with className property 
    // we used join(' ') because we need to pass string to className instead of array
    const assignedClasses = [];
    if (this.state.persons.length <= 2){
      assignedClasses.push(classes.red)
    }
    if (this.state.persons.length <= 1){
      assignedClasses.push(classes.bold)
    }

    return (
      <div className={classes.App}>

        <h1>Hi, I'm a React App</h1>
        <p className={assignedClasses.join(' ')}>This is really working!!!</p>

        <button className={btnClass}
        onClick={this.togglePersonsHandler}>Toggle Persons</button>
       
        {persons}
      </div>
    );
  }
}

export default App;
