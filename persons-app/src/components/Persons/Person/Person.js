import React, { Component } from 'react';

import Aux from '../../../hoc/Auxiliary';
import classes from './Person.module.css'
/*<div className={classes.Person} >*/
/*</div>*/
class Person extends Component {
    render(){
        console.log('[Person.js] rendering...');
        return (
        <React.Fragment>
            
                <p onClick={this.props.click}>I'm {this.props.name} and {this.props.age} years old</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name}></input>
            
        </React.Fragment>
        );
    }
}


export default Person;