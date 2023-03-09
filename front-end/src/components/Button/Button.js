import React from 'react'
import ButtonStyle from './Button.module.css'

const Button = (props) => {
    return(

        <button className={ButtonStyle.btn} onClick={props.clicked}>{props.label}</button>
    )
}

export default Button