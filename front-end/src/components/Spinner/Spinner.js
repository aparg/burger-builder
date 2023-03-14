import React from 'react'
import LogoImg from '../../assets/images/burgerLogo.png'
import SpinnerStyle from './Spinner.module.css'

const Spinner = (props) => {
    return(
        <div className={SpinnerStyle.spinnerContainer}>
            <img src={LogoImg} className = {SpinnerStyle.spinner} alt="spinner"></img>
        </div>
    )
}

export default Spinner