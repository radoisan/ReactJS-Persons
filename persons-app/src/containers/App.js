import React, { Component } from 'react';
import classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }

  state = {
    persons: [
      {id: '1asd', name: 'Rado', age: 28},
      {id: '2qwe', name: 'Kiro', age: 33},
      {id: '3zxc', name: 'Stef', age: 33}
    ],
    otherState: 'Some other state',
    showPersons: false
  }

  static getDerivedStateFromProps(props, state){
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  componentDidMount(){
    console.log('[App.js] componentDidMount')
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
    console.log('[App.js] render')

    let persons = null;

    if(this.state.showPersons){
      persons = <Persons 
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangeHandler} />;
    }

    return (
      <div className={classes.App}>
        <Cockpit 
        title={this.props.appTitle}
        showPersons={this.state.showPersons}
        persons={this.state.persons} 
        clicked={this.togglePersonsHandler} />
        {persons}
      </div>
    );
  }
}

export default App;
