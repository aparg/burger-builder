import React from 'react'
import SpinnerImg from '../../assets/images/Spinner/spinner.png'
import SpinnerStyle from './Spinner.module.css'

const Spinner = (props) => {
    return(
        <div className={SpinnerStyle.spinnerContainer}>
            <img src={SpinnerImg} className = {SpinnerStyle.spinner} alt="spinner"></img>
        </div>
    )
}

export default Spinner