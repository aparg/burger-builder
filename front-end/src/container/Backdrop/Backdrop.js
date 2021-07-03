import React from 'react'
import BackdropStyle from './Backdrop.module.css'

const Backdrop = (props) => {
    let classes=[]
    if (props.show)classes.push(BackdropStyle.main)
    return(
        <div className={classes.join(' ')} onClick={props.back}/>
    )
}

export default Backdrop