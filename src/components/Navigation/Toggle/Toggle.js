import React from 'react'
import ToggleStyle from './ToggleStyle.module.css'
import ToggleButton from '../../../assets/images/toggle.png'

const Toggle = (props) =>{
    return (
        <img src={ToggleButton} 
        className={ToggleStyle.main}
        onClick={props.onClick} 
        alt="toggle"/>
    )
}
export default Toggle