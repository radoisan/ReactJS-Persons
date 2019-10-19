import React from 'react';


const char = (props) => {
    const charStyle = {
        display: 'inline-block', 
        padding: '16px',
        textAlign: 'center',
        margin: '16px',
        border: '1px solid black'
    }

    return (
        <div style={charStyle}>
            <p>{props.char}</p>
        </div>
    )
}

export default char;