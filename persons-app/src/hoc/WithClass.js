import React from 'react';

//Function that returns a function, and that function returns a func. component

const withClass = (WrappedComponent, className) => {
    return props => (
        <div className={className}>
            <WrappedComponent />
        </div>
    );
};

export default withClass;
