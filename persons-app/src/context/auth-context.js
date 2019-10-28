import React from 'react';

const authContext = React.createRef({
    authenticated: false, 
    login: () => {}
});

export default authContext;