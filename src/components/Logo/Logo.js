import React from 'react';

import budgetLogo from '../../assets/images/budget.png';
import classes from './Logo.css';

const logo = (props) => (
    <div className={classes.Logo} style={{height: props.height, display:'flex'}}>
        <img src={budgetLogo} alt="Budget" />
        <h3>Budget 2.0</h3>
    </div>
);

export default logo;