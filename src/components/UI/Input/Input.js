import React from 'react';

import classes from './Input.css'


const input = (props) => {
    let inputElement = null;
    const inputClasses = [classes.InputElement];

    if(props.invalid && props.shouldValidate && props.touched){
        inputClasses.push(classes.Invalid);
    }

    switch (props.elementType) {
        case ('input'):
            inputElement = <input
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value} 
                onChange={props.changed}/>

            break;
        case ('textarea'):
            inputElement = <textarea
                className={inputClasses}
                {...props.elementConfig}
                value={props.value} 
                onChange={props.changed}/>

            break;
        case ('select'):
            inputElement =
                <select
                    className={inputClasses}
                    value={props.value} 
                    onChange={props.changed}>
                    {props.elementConfig.options.map(options => (
                        <option key={options.value} value={options.value}>
                            {options.displayValue}
                        </option>
                    ))}
s
                </select>
            break;
        default:
            inputElement = <input
                className={inputClasses}
                {...props.elementConfig}
                value={props.value} 
                onChange={props.changed}/>
    }

    return (
        <div className={classes.Input}>
            <label className={classes.Label}>{props.label}</label>
            {inputElement}
        </div>
    );



}


export default input;