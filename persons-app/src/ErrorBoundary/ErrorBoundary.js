import React, { Component } from 'react';

class ErrorBoundary extends Component {
    state = {
        hasError: false,
        errorMessage: ''
    }
    // method which receive potential errors, and additional info passed into it by ReactJS
    // componentDidCatch() will be executed when another component wrapped  with ErrorBoundary
    // throws an erron
    componentDidCatch = (error, info) => {
        this.setState({hasError: true, errorMessage: error});
    }

    render(){
        if (this.state.hasError){
            return <h1>{this.state.errorMessage}</h1>;
        } else {
            return this.props.children;
        }
    }
} 
export default ErrorBoundary;