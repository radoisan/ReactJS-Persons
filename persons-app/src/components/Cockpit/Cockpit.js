import React, { useEffect, useRef } from 'react';

import classes from './Cockpit.module.css';

const cockpit = (props) => {

  const toggleBtnRef = useRef(null);
  
  useEffect(() => {
    console.log('[Cockpit.js] useEffect')
    //Http request...
    //const timer = setTimeout(() => {
    //  alert('Saved data to cloud'); 
    //},1000);
    toggleBtnRef.current.click();
    return () => {
    //  clearTimeout(timer);
      console.log('[Cockpit.js] cleanup work in useEffect');
    }
  }, []);  

  useEffect(() => {
    console.log('[Cockpit.js] useEffect')
    return () => {
      console.log('[Cockpit.js] cleanup work in 2nd useEffect');
    };
  });

  
  // Defined style classes, as an array, and we use them with className property 
  // we used join(' ') because we need to pass string to className instead of array
  const assignedClasses = [];
  let btnClass = '';
   
  if(props.showPersons){
    btnClass = classes.Red;    
  }

  if (props.personsLenght <= 2){
    assignedClasses.push(classes.red)
  }
  if (props.personsLenght <= 1){
    assignedClasses.push(classes.bold)
  }

  return (
  <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(' ')}>This is really working!!!</p>

      <button 
      ref={toggleBtnRef}
      className={btnClass}
      onClick={props.clicked}>Toggle Persons</button>
      <button onClick={props.login}>Log in</button>
  </div>
  );
};

export default React.memo(cockpit);