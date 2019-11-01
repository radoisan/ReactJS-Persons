import React from 'react';

import Aux from '../../hoc/Auxiliary';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import Sidedrawer from '../Navigation/Sidedrawer/Sidedrawer';

const layout = (props) => (
    <Aux>
        <Toolbar />
        <Sidedrawer />
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux>
);

export default layout;