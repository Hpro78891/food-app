import classes from "./input.module.css"

import React from 'react'

const input = (props) => {
    return (
        <div className={classes.input}>
            <label htmlFor={props.input.id}>{props.label}</label>
            <input {...props.input} />
        </div>
    )
}

export default input
