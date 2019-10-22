import React from 'react';

import classes from './Cockpit.module.css';

const cockpit = (props) => {
    // Defined style classes, as an array, and we use them with className property 
    // we used join(' ') because we need to pass string to className instead of array
    const assignedClasses = [];
    let btnClass = '';
    
    if(props.showPersons){
        btnClass = classes.Red;    
    }

    if (props.persons.length <= 2){
      assignedClasses.push(classes.red)
    }
    if (props.persons.length <= 1){
      assignedClasses.push(classes.bold)
    }

    return (
    <div className={classes.Cockpit}>
        <h1>Hi, I'm a React App</h1>
        <p className={assignedClasses.join(' ')}>This is really working!!!</p>

        <button className={btnClass}
        onClick={props.clicked}>Toggle Persons</button>
    </div>
    );
};

export default cockpit;