import React from 'react';

const validation = (props) => {
    
    if(props.wordlen <= 5 && props.wordlen <=20){
        return (
            <div>
                <p>Text too short!!!</p>
            </div>
        );
    } else {
        return (
            <div>
                <p>Text Long Enough!!!</p>
            </div>
        )
    }
    
};

export default validation;